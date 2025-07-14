import React, { useRef, useEffect } from 'react';

type AutoResizingTextareaProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minRows?: number;
  maxRows?: number;
};

export const AutoResizingTextarea: React.FC<AutoResizingTextareaProps> = ({
  value,
  onChange,
  placeholder,
  minRows = 1,
  maxRows = 10,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.rows = minRows;
      const lineHeight = 24; // Adjust this if you're styling it
      const lines = Math.min(
        Math.max(Math.floor(textarea.scrollHeight / lineHeight), minRows),
        maxRows
      );
      textarea.rows = lines;
    }
  }, [value, minRows, maxRows]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: '100%',
        resize: 'none',
        lineHeight: '24px',
        fontSize: '16px',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
      }}
    />
  );
};
