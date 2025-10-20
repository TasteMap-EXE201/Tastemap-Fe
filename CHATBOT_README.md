# Chatbot AI Tastemap - Hướng dẫn cài đặt và sử dụng

## 🤖 Tính năng

- **Floating Chat Widget**: Nút chat nổi ở góc phải màn hình
- **Giao diện iMessage**: Thiết kế bo tròn, thân thiện
- **AI Assistant**: Sử dụng OpenAI GPT-3.5-turbo
- **Responsive**: Hoạt động tốt trên mobile và desktop
- **Typing Indicator**: Hiệu ứng đang gõ khi AI phản hồi
- **Auto-scroll**: Tự động cuộn xuống tin nhắn mới

## 🚀 Cài đặt

### 1. Cấu hình OpenAI API Key

Tạo file `.env.local` trong thư mục root của dự án:

```bash
# .env.local
OPENAI_API_KEY=sk-your-actual-openai-api-key-here
```

**Lấy API Key:**

1. Truy cập [GROQ API Platform] (https://groq.com/?utm_source=chatgpt.com)
2. Đăng nhập/đăng ký tài khoản
3. Tạo API key mới
4. Copy và paste vào file `.env.local`

### 2. Kiểm tra Dependencies

Các package cần thiết đã được cài sẵn:

- `react-icons` ✅
- `next` ✅
- `react` ✅

### 3. Chạy dự án

```bash
npm run dev
```

## 📁 Cấu trúc File

```
src/
├── lib/
│   └── systemPrompt.js          # Prompt hệ thống cho AI
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.js         # API endpoint cho chat
│   └── layout.tsx               # Layout chính (đã thêm ChatbotWidget)
└── component/
    └── common/
        ├── ChatbotWidget.jsx    # Component chat widget
        └── index.ts             # Export ChatbotWidget
```

## 🎨 Giao diện

- **Nút Chat**: Góc phải dưới, màu cam (#F97316)
- **Avatar Bot**: Sử dụng `/public/logo.png`
- **Avatar User**: Icon placeholder từ react-icons
- **Màu sắc**: Phù hợp với theme Tastemap (cam, trắng, xám)

## ⚙️ Tùy chỉnh

### Thay đổi Model AI

Trong `src/app/api/chat/route.js`:

```javascript
const payload = {
  model: "gpt-4o", // Thay đổi model ở đây
  // gpt-3.5-turbo (rẻ, nhanh)
  // gpt-4o (thông minh hơn, đắt hơn)
  // gpt-4 (cũ hơn nhưng ổn định)
};
```

### Tùy chỉnh System Prompt

Chỉnh sửa `src/lib/systemPrompt.js` để thay đổi cách AI phản hồi.

### Thay đổi giao diện

Chỉnh sửa `src/component/common/ChatbotWidget.jsx`:

- Màu sắc: Tìm các class `bg-orange-500`, `text-orange-*`
- Kích thước: Thay đổi `w-[360px]`, `h-[480px]`
- Vị trí: Thay đổi `right-5`, `bottom-5`

## 🔧 Troubleshooting

### Lỗi "OpenAI API key not configured"

- Kiểm tra file `.env.local` có tồn tại
- Đảm bảo tên biến là `GROQ_API_KEY`
- Restart server sau khi thêm env

### Lỗi "Method not allowed"

- API chỉ chấp nhận POST request
- Kiểm tra fetch method trong ChatbotWidget

### Chat không hiển thị

- Kiểm tra ChatbotWidget đã được import trong layout.tsx
- Kiểm tra console browser có lỗi không

### Lỗi build

- Đảm bảo tất cả import đúng đường dẫn
- Kiểm tra TypeScript types nếu cần

## 💡 Tính năng nâng cao (tùy chọn)

### 1. Lưu lịch sử chat

```javascript
// Thêm vào localStorage
localStorage.setItem("chatHistory", JSON.stringify(messages));
```

### 2. Streaming response

```javascript
// Sử dụng OpenAI streaming API
const response = await fetch("https://api.openai.com/v1/chat/completions", {
  // ... other options
  stream: true,
});
```

### 3. Rate limiting

```javascript
// Thêm debounce hoặc throttle
const debouncedSendMessage = debounce(sendMessage, 1000);
```

## 📞 Hỗ trợ

Nếu gặp vấn đề, kiểm tra:

1. Console browser (F12)
2. Network tab để xem API calls
3. Server logs trong terminal

## 🎯 Demo

Sau khi cài đặt thành công:

1. Mở trang web
2. Thấy nút chat màu cam ở góc phải dưới
3. Click để mở chat
4. Gõ "Xin chào" để test
5. AI sẽ phản hồi bằng tiếng Việt

**Chúc bạn thành công! 🚀**
