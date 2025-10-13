import React from 'react';

interface Tag {
  id: string;
  label: string;
}

interface TagSelectorProps {
  label: string;
  tags: Tag[];
  selectedTags: string[];
  onChange: (selectedTags: string[]) => void;
  className?: string;
}

export const TagSelector: React.FC<TagSelectorProps> = ({
  label,
  tags,
  selectedTags,
  onChange,
  className = '',
}) => {
  const toggleTag = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      onChange(selectedTags.filter(id => id !== tagId));
    } else {
      onChange([...selectedTags, tagId]);
    }
  };

  return (
    <div className={`mb-6 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        {label}
      </label>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag.id}
            type="button"
            onClick={() => toggleTag(tag.id)}
            className={`
              px-3 py-2 rounded-full text-sm font-medium
              transition-all duration-200
              ${
                selectedTags.includes(tag.id)
                  ? 'bg-orange-100 text-orange-600 border border-orange-200'
                  : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200'
              }
            `}
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  );
};