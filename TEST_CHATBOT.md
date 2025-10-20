# Test Chatbot - Checklist

## ✅ Checklist trước khi test

### 1. File đã tạo:
- [x] `src/lib/systemPrompt.js` - System prompt cho AI
- [x] `src/app/api/chat/route.js` - API endpoint
- [x] `src/component/common/ChatbotWidget.jsx` - Chat widget
- [x] `src/component/common/index.ts` - Export ChatbotWidget
- [x] `src/app/layout.tsx` - Đã thêm ChatbotWidget
- [x] `.env.example` - Template cho env
- [x] `CHATBOT_README.md` - Hướng dẫn chi tiết

### 2. Cần làm:
- [ ] Tạo file `.env.local` với GROQ API
- [ ] Restart server: `npm run dev`
- [ ] Test chat widget

## 🧪 Test Cases

### Test 1: Hiển thị widget
- [ ] Thấy nút chat màu cam ở góc phải dưới
- [ ] Click nút → chat widget mở ra
- [ ] Thấy tin nhắn chào mừng từ bot

### Test 2: Gửi tin nhắn
- [ ] Gõ "Xin chào" → Enter
- [ ] Thấy tin nhắn user hiển thị bên phải
- [ ] Thấy typing indicator (3 chấm nhảy)
- [ ] Nhận được phản hồi từ AI bằng tiếng Việt

### Test 3: UI/UX
- [ ] Avatar bot = logo Tastemap
- [ ] Avatar user = icon placeholder
- [ ] Tin nhắn bot bo tròn, màu trắng
- [ ] Tin nhắn user bo tròn, màu xanh nhạt
- [ ] Auto scroll xuống tin nhắn mới

### Test 4: Responsive
- [ ] Hoạt động tốt trên desktop
- [ ] Hoạt động tốt trên mobile
- [ ] Widget không che khuất nội dung chính

### Test 5: Error handling
- [ ] Không có OpenAI key → hiển thị lỗi thân thiện
- [ ] Mạng chậm → hiển thị loading
- [ ] API lỗi → hiển thị tin nhắn lỗi

## 🚨 Nếu có lỗi

### Lỗi thường gặp:
1. **Widget không hiển thị**: Kiểm tra import trong layout.tsx
2. **API lỗi**: Kiểm tra .env.local và OPENAI_API_KEY
3. **Build lỗi**: Kiểm tra TypeScript types
4. **Styling lỗi**: Kiểm tra Tailwind classes

### Debug steps:
1. Mở F12 → Console tab
2. Kiểm tra Network tab khi gửi tin nhắn
3. Xem server logs trong terminal
4. Kiểm tra file .env.local

## 📝 Notes

- Model mặc định: gpt-3.5-turbo (có thể đổi thành gpt-4o)
- Ngôn ngữ: Tiếng Việt
- Theme: Phù hợp với Tastemap (cam, trắng)
- Position: Fixed bottom-right
- Z-index: 50 (cao để không bị che)