import { NextResponse } from "next/server";

// Lưu history tạm thời trong session (hoặc DB nếu muốn)
let conversationHistory = [];

export async function POST(request) {
  try {
    const body = await request.json();
    const userMessage = body?.userMessage ?? "";
    if (!userMessage) {
      return NextResponse.json({ error: "No message provided" }, { status: 400 });
    }

    const GROQ_KEY = process.env.GROQ_API_KEY;
    if (!GROQ_KEY) {
      console.error("GROQ_API_KEY missing");
      return NextResponse.json({ error: "Groq API key not configured" }, { status: 500 });
    }

    // Lưu tin nhắn user vào history
    conversationHistory.push({ role: "user", content: userMessage });

    // Lấy thời gian Việt Nam
    const vietnamTime = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

    // Lấy 50 tin nhắn gần nhất để giữ context
    const recentHistory = conversationHistory.slice(-50);

    const payload = {
      model: "llama-3.3-70b-versatile",
      messages: [
        // System prompt mới
        {
          role: "system",
          content: `
Bạn là trợ lý AI thân thiện, luôn trả lời bằng tiếng Việt.
Dựa trên múi giờ Việt Nam (GMT+7). Thời gian hiện tại ở Việt Nam là: ${vietnamTime}.

Nguyên tắc trả lời:

1. **Quán ăn, món ăn, nhà hàng, địa điểm ẩm thực**:
   - Luôn cung cấp địa chỉ chính xác, tọa độ hoặc Google Maps link.
   - Thêm số điện thoại, giờ mở cửa nếu biết.
   - Gợi ý món nổi bật.
   - **Mỗi quán là 1 bullet riêng**.
   - Trong bullet, chia info theo từng dòng: tên, địa chỉ, số điện thoại, giờ mở cửa.
   - **Không viết 1 đoạn liền dài**.

2. **Kỹ năng, hướng dẫn, mẹo, công thức, chủ đề phức tạp**:
   - Chia bullet hoặc đoạn dễ đọc, mỗi bullet 1-2 câu.
   - Nếu có ví dụ, đặt riêng dưới bullet.

3. **Câu hỏi về thời gian, ngày tháng, lịch, sự kiện**:
   - Trả lời dựa trên múi giờ Việt Nam (GMT+7).

4. **Câu hỏi khác**:
   - Trả lời thân thiện, dễ đọc.
   - Nếu không biết, trả lời lịch sự và gợi ý nguồn tham khảo.

5. Luôn chia đoạn/bullet khi có nhiều thông tin để người dùng dễ nắm bắt.
`
        },
        // Instruction override mạnh
        {
          role: "user",
          content: `
Hãy trả lời tất cả câu hỏi sau **dưới dạng bullet/đoạn dễ đọc**, đặc biệt với quán ăn/món ăn: mỗi quán là 1 bullet, trong bullet tách thông tin tên, địa chỉ, số điện thoại, giờ mở cửa. Không trả 1 đoạn liền dài.
`
        },
        ...recentHistory
      ],
      temperature: 0.2,
      max_tokens: 600,
      stream: false,
    };

    const resp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error("Groq API error:", resp.status, errText);
      return NextResponse.json({ error: "Groq API error", details: errText }, { status: 500 });
    }

    const data = await resp.json();
    const reply = data.choices?.[0]?.message?.content || "Không có phản hồi nào.";

    // Lưu reply vào history
    conversationHistory.push({ role: "assistant", content: reply });

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Server error in /api/chat:", err);
    return NextResponse.json({ error: "Internal server error", details: String(err) }, { status: 500 });
  }
}
