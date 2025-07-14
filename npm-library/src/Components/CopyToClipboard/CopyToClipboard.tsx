import React, { useState } from 'react';

type CopyToClipboardProps = {
  text: string;
  tooltipText?: string;
};

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  tooltipText = 'Copied!',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={handleCopy} style={{ cursor: 'pointer' }}>
        Copy
      </button>
      {copied && (
        <span
          style={{
            position: 'absolute',
            top: '-1.5rem',
            left: '0',
            fontSize: '0.75rem',
            background: '#333',
            color: '#fff',
            padding: '2px 6px',
            borderRadius: '4px',
          }}
        >
          {tooltipText}
        </span>
      )}
    </div>
  );
};
