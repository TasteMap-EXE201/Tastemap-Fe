import React, { useRef } from "react";
import { Upload, X } from "lucide-react";

interface ImageUploadProps {
  label: string;
  images: File[];
  onImagesChange: (images: File[]) => void;
  maxFiles?: number;
  maxSize?: number; // in MB
  acceptedTypes?: string[];
  className?: string;
  required?: boolean;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  label,
  images,
  onImagesChange,
  maxFiles = 5,
  maxSize = 5,
  acceptedTypes = ["image/png", "image/jpeg", "image/jpg"],
  className = "",
  required = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    // Validate files
    const validFiles = files.filter((file) => {
      if (!acceptedTypes.includes(file.type)) {
        alert(
          `File ${file.name} không đúng định dạng. Chỉ chấp nhận PNG, JPG.`
        );
        return false;
      }
      if (file.size > maxSize * 1024 * 1024) {
        alert(`File ${file.name} quá lớn. Tối đa ${maxSize}MB.`);
        return false;
      }
      return true;
    });

    const newImages = [...images, ...validFiles].slice(0, maxFiles);
    onImagesChange(newImages);
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onImagesChange(newImages);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const input = fileInputRef.current;
    if (input) {
      const dt = new DataTransfer();
      files.forEach((file) => dt.items.add(file));
      input.files = dt.files;
      handleFileSelect({ target: input } as any);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className={`mb-6 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Upload area */}
      <div
        className="
          border-2 border-dashed border-gray-300 rounded-lg p-6
          hover:border-orange-500 hover:bg-orange-50
          transition-colors duration-200 cursor-pointer
          text-center
        "
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-sm text-gray-600 mb-1">
          Kéo thả ảnh vào đây hoặc click để chọn
        </p>
        <p className="text-xs text-gray-500">
          PNG, JPG tối đa {maxSize}MB ({maxFiles} ảnh tối đa)
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept={acceptedTypes.join(",")}
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Preview images */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={URL.createObjectURL(image)}
                alt={`Preview ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg border border-gray-200"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="
                  absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white
                  rounded-full flex items-center justify-center
                  opacity-0 group-hover:opacity-100 transition-opacity
                  hover:bg-red-600
                "
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
