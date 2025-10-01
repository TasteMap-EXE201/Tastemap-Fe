"use client";

import React, { useState } from 'react';
import { Eye, Plus, Send, Lightbulb, Check, Upload, Edit3, Heart, MessageCircle, Share2 } from 'lucide-react';

export default function AddArticle() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setImages([...images, ...newImages]);
    }
  };

  const handleSaveDraft = () => {
    console.log('Save draft');
  };

  const handlePublish = () => {
    console.log('Publish article');
  };

  const handlePreview = () => {
    setIsPreviewMode(true);
  };

  const handleEdit = () => {
    setIsPreviewMode(false);
  };

  const recentArticles = [
    { title: 'Món cơm tấm đặc biệt', status: 'published' },
    { title: 'Thực đơn mới tháng 12', status: 'draft' },
    { title: 'Cảm ơn khách hàng', status: 'published' },
  ];

  const tips = [
    'Viết tiêu đề hấp dẫn và dễ hiểu',
    'Sử dụng hình ảnh chất lượng cao',
    'Chia nhỏ đoạn văn để dễ đọc',
    'Thêm hashtag phù hợp',
    'Kể câu chuyện thú vị về món ăn'
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {isPreviewMode ? 'Xem trước bài viết' : 'Tạo bài viết mới'}
              </h1>
              <div className="flex items-center space-x-3">
                {isPreviewMode && (
                  <>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                      Xem trước
                    </span>
                    <span className="text-gray-500 text-sm">Chưa chọn danh mục</span>
                  </>
                )}
                {!isPreviewMode && (
                  <p className="text-gray-600">Chia sẻ những điều thú vị về quán của bạn</p>
                )}
              </div>
            </div>
          </div>
          <button
            onClick={isPreviewMode ? handleEdit : handlePreview}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {isPreviewMode ? (
              <>
                <Edit3 className="w-4 h-4 text-gray-500" />
                <span>Chỉnh sửa</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 text-gray-500" />
                <span>Xem trước</span>
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2">
            {isPreviewMode ? (
              /* Preview Mode */
              <div className="bg-white rounded-lg shadow-sm p-8">
                {/* Article Preview */}
                <article className="space-y-6">
                  {/* Article Title */}
                  <h1 className="text-3xl font-bold text-gray-900">
                    {title || 'Tiêu đề bài viết sẽ hiển thị ở đây...'}
                  </h1>

                  {/* Article Meta */}
                  <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">Q</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Tên quán của bạn</p>
                      <p className="text-sm text-gray-500">Vừa mới đăng</p>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="prose max-w-none">
                    {content ? (
                      <p className="text-gray-900 leading-relaxed whitespace-pre-wrap">
                        {content}
                      </p>
                    ) : (
                      <p className="text-gray-400 italic">
                        Nội dung bài viết sẽ hiển thị ở đây…
                      </p>
                    )}
                  </div>

                  {/* Article Images */}
                  {images.length > 0 && (
                    <div className="grid grid-cols-2 gap-4">
                      {images.map((image, index) => (
                        <img
                          key={index}
                          src={URL.createObjectURL(image)}
                          alt={`Article image ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  )}

                  {/* Article Tags */}
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Interaction Bar */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span className="text-sm font-medium">Thích</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">Bình luận</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                        <Share2 className="w-5 h-5" />
                        <span className="text-sm font-medium">Chia sẻ</span>
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ) : (
              /* Edit Mode */
              <div className="bg-white rounded-lg shadow-sm p-8">
                {/* Title Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Tiêu đề bài viết *
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Nhập tiêu đề bài viết..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>

                {/* Content Textarea */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Nội dung bài viết *
                  </label>
                  <div className="relative">
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Viết nội dung bài viết của bạn…"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 resize-none"
                      rows={8}
                      maxLength={500}
                    />
                    <div className="absolute bottom-3 right-3 text-sm text-gray-600">
                      {content.length}/500 ký tự
                    </div>
                  </div>
                </div>

                {/* Tags Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Tags
                  </label>
                  <div className="flex space-x-2 mb-3">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Thêm tag…"
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                      onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                    />
                    <button
                      onClick={handleAddTag}
                      className="px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Image Upload */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Hình ảnh
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600 mb-1">Kéo thả hoặc click để tải ảnh lên</p>
                      <p className="text-sm text-gray-400">PNG, JPG, GIF up to 10MB</p>
                    </label>
                  </div>
                  {images.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {images.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-20 object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            {/* Publish Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Xuất bản</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-900">Trạng thái:</span>
                  <span className="text-gray-600">Nháp</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900">Độ dài:</span>
                  <span className="text-gray-600">{content.length} ký tự</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900">Hình ảnh:</span>
                  <span className="text-gray-600">{images.length} ảnh</span>
                </div>
              </div>
              <div className="space-y-3">
                <button
                  onClick={handleSaveDraft}
                  disabled={!title.trim() && !content.trim()}
                  className={`w-full py-2 px-4 rounded-lg transition-colors ${
                    !title.trim() && !content.trim()
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Lưu nháp
                </button>
                <button
                  onClick={handlePublish}
                  disabled={!title.trim() || !content.trim()}
                  className={`w-full py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                    !title.trim() || !content.trim()
                      ? 'bg-blue-100 text-blue-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Đăng bài viết</span>
                </button>
              </div>
            </div>

            {/* Tips Card */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                <h3 className="text-lg font-semibold text-gray-900">Mẹo viết bài hay</h3>
              </div>
              <ul className="space-y-2">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-900">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Articles Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Bài viết gần đây</h3>
              <div className="space-y-3">
                {recentArticles.map((article, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-900 font-medium">{article.title}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        article.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {article.status === 'published' ? 'Đã đăng' : 'Nháp'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}