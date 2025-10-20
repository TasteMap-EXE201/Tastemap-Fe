// src/component/common/ChatbotWidget.jsx
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaUserCircle, FaPaperPlane } from "react-icons/fa";
import Image from "next/image";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Xin chào! Mình là trợ lý Tastemap — cần mình giúp gì hôm nay?",
      id: Date.now(),
      isStreaming: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef();
  const textareaRef = useRef();

  const scrollToBottom = () => {
    if (scrollRef.current) {
      requestAnimationFrame(() => {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth",
        });
      });
    }
  };

  useLayoutEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const appendOrUpdateStreaming = (id, text, isStreaming = false) => {
    setMessages((prev) => {
      const idx = prev.findIndex((m) => m.id === id);
      if (idx === -1) {
        return [...prev, { role: "assistant", content: text, id, isStreaming }];
      } else {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], content: text, isStreaming };
        return copy;
      }
    });
    scrollToBottom();
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;

    const userMsg = { role: "user", content: text, id: Date.now() + Math.random(), isStreaming: false };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const assistantId = Date.now() + Math.random();
    appendOrUpdateStreaming(assistantId, "", true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: text }),
      });

      const data = await res.json();

      if (data.error) {
        appendOrUpdateStreaming(assistantId, "Xin lỗi, có lỗi xảy ra. Vui lòng thử lại sau.", false);
      } else {
        appendOrUpdateStreaming(assistantId, data.reply, false);
      }
    } catch (err) {
      console.error(err);
      appendOrUpdateStreaming(assistantId, "Xin lỗi, có lỗi mạng. Vui lòng thử lại.", false);
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  return (
    <>
      {/* Floating button */}
      <button
        aria-label={isOpen ? "Đóng trợ lý" : "Mở trợ lý"}
        onClick={() => setIsOpen((s) => !s)}
        className={`fixed right-5 bottom-5 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center bg-orange-500 text-white 
          transition-transform duration-300 hover:scale-105 hover:bg-orange-600`}
      >
        <Image src="/logo.png" alt="Tastemap Assistant" width={36} height={36} className="rounded-full" />
      </button>

      {/* Chat widget */}
      <div className={`fixed flex justify-end bottom-5 right-5 z-40 w-[92vw] max-w-[360px] md:max-w-[380px]`}>
        <div
          className={`flex flex-col h-[480px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl bg-white
            transform transition-transform duration-300
            ${isOpen ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
            mr-16
          `}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-100">
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <Image src="/logo.png" alt="Tastemap" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-800">Trợ lý Tastemap</div>
              <div className="text-xs text-gray-500">Hỗ trợ tìm quán, hướng dẫn sử dụng</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 text-lg font-bold w-6 h-6 flex items-center justify-center"
              aria-label="Đóng chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
            {messages.map((m) => {
              const isUser = m.role === "user";
              const isAssistant = m.role === "assistant";
              const showAvatar = isAssistant && (m.content.trim() !== "" || m.isStreaming);

              return (
                <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"} items-end`}>
                  {isAssistant && showAvatar && (
                    <div className="mr-2 flex-shrink-0">
                      <div className="w-9 h-9 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
                        <Image src="/logo.png" alt="bot" width={36} height={36} />
                      </div>
                    </div>
                  )}

                  <div className={`max-w-[78%] md:max-w-[70%] text-left`}>
                    <div
                      className={`break-words px-4 py-2 text-sm leading-6 whitespace-pre-line ${
                        isUser
                          ? "bg-[#E8F2FF] text-gray-900 rounded-xl"
                          : "bg-white text-gray-800 rounded-xl shadow-sm"
                      }`}
                    >
                      {m.content.replace(/[*_~`]/g, "")}
                      {m.isStreaming && (
                        <span className="inline-flex items-center gap-1 ml-2">
                          <span className="h-2 w-2 rounded-full animate-bounce bg-gray-400 inline-block" />
                          <span className="h-2 w-2 rounded-full animate-bounce bg-gray-500 inline-block delay-75" />
                          <span className="h-2 w-2 rounded-full animate-bounce bg-gray-600 inline-block delay-150" />
                        </span>
                      )}
                    </div>
                  </div>

                  {isUser && (
                    <div className="ml-2 flex-shrink-0">
                      <FaUserCircle style={{ width: 34, height: 34, color: "#9CA3AF" }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white flex-shrink-0">
            <div className="flex gap-2 items-end">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Nhập tin nhắn..."
                spellCheck={false} // Tắt spellcheck
                className="flex-1 px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300 resize-none overflow-hidden"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
                aria-label="Gửi tin nhắn"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
