import React, { useState, useRef } from "react";
import {
  X,
  Image,
  Utensils,
  Home,
  Headphones,
  Calendar,
  ChevronDown,
} from "lucide-react";

interface AddImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ImageUploadData) => void;
}

interface ImageUploadData {
  files: File[];
  category: string;
  description: string;
  priority: string;
  privacy: string;
  addWatermark: boolean;
  autoTag: boolean;
}

const categories = [
  { id: "food", label: "Món ăn", icon: Utensils, color: "text-orange-600" },
  { id: "interior", label: "Nội thất", icon: Home, color: "text-blue-600" },
  {
    id: "service",
    label: "Dịch vụ",
    icon: Headphones,
    color: "text-green-600",
  },
  { id: "event", label: "Sự kiện", icon: Calendar, color: "text-purple-600" },
];

const priorityOptions = [
  { value: "low", label: "Thấp" },
  { value: "normal", label: "Bình thường" },
  { value: "high", label: "Cao" },
];

const privacyOptions = [
  { value: "public", label: "Công khai" },
  { value: "private", label: "Riêng tư" },
  { value: "friends", label: "Bạn bè" },
];

export default function AddImageModal({
  isOpen,
  onClose,
  onSubmit,
}: AddImageModalProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("food");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("normal");
  const [privacy, setPrivacy] = useState("public");
  const [addWatermark, setAddWatermark] = useState(false);
  const [autoTag, setAutoTag] = useState(true);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileSelect = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files).filter((file) =>
        file.type.startsWith("image/")
      );
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleSubmit = () => {
    const data: ImageUploadData = {
      files: selectedFiles,
      category: selectedCategory,
      description,
      priority,
      privacy,
      addWatermark,
      autoTag,
    };
    onSubmit(data);
    handleClose();
  };

  const handleClose = () => {
    setSelectedFiles([]);
    setSelectedCategory("food");
    setDescription("");
    setPriority("normal");
    setPrivacy("public");
    setAddWatermark(false);
    setAutoTag(true);
    setIsDragOver(false);
    onClose();
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-gray-700 opacity-50 backdrop-filter backdrop-blur-sm z-40"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4">
        <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-black">
              Thêm ảnh mới{" "}
              <span className="text-red-500" aria-hidden="true">
                *
              </span>
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Upload Area */}
            <div
              className={`
                relative border-2 border-dashed rounded-lg p-8 text-center transition-colors
                ${
                  isDragOver
                    ? "border-blue-400 bg-blue-50"
                    : "border-gray-300 bg-gray-50"
                }
                ${
                  selectedFiles.length > 0 ? "border-green-400 bg-green-50" : ""
                }
              `}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileSelect(e.target.files)}
              />

              <div className="space-y-3">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Image className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Thêm ảnh của quán</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Kéo thả ảnh vào đây hoặc chọn từ máy tính
                  </p>
                </div>
              </div>
            </div>

            {/* Selected Files Preview */}
            {selectedFiles.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-medium text-gray-900">
                  Ảnh đã chọn ({selectedFiles.length})
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-full h-20 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => removeFile(index)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Category Selection */}
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">
                Chọn danh mục ảnh{" "}
                <span className="text-red-500" aria-hidden="true">
                  *
                </span>
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`
                        p-3 rounded-lg border-2 transition-all text-center
                        ${
                          selectedCategory === category.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 bg-white hover:bg-gray-50"
                        }
                      `}
                    >
                      <IconComponent
                        className={`w-6 h-6 mx-auto mb-2 ${category.color}`}
                      />
                      <span className="text-sm font-medium text-black">
                        {category.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Settings */}
            <div className="space-y-4">
              <h3 className="font-bold text-black">
                Cài đặt đăng ảnh{" "}
                <span className="text-red-500" aria-hidden="true">
                  *
                </span>
              </h3>

              {/* Description */}
              <div>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Viết mô tả ngắn gọn về những ảnh này..."
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none h-20 text-sm placeholder-gray-400"
                />
              </div>

              {/* Priority and Privacy */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Độ ưu tiên hiển thị{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <div className="relative">
                    <select
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white text-black"
                    >
                      {priorityOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quyền riêng tư{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <div className="relative">
                    <select
                      value={privacy}
                      onChange={(e) => setPrivacy(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white text-black"
                    >
                      {privacyOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={addWatermark}
                    onChange={(e) => setAddWatermark(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    Thêm watermark tên quán vào ảnh
                  </span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={autoTag}
                    onChange={(e) => setAutoTag(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    Tự động gắn tag địa điểm
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center p-6 border-t border-gray-200">
            <button
              onClick={handleClose}
              className="px-6 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Hủy bỏ
            </button>

            <button
              onClick={handleSubmit}
              disabled={selectedFiles.length === 0}
              className={`
                px-6 py-2 rounded-lg font-medium transition-colors
                ${
                  selectedFiles.length > 0
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }
              `}
            >
              Đăng {selectedFiles.length} ảnh
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
