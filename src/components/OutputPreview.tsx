'use client';

interface OutputPreviewProps {
  content: string;
}

export default function OutputPreview({ content }: OutputPreviewProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Preview</h2>
      <div className="p-4 border rounded-lg min-h-[200px]">
        {content ? (
          <p className="whitespace-pre-wrap">{content}</p>
        ) : (
          <p className="text-gray-500">Converted content will appear here...</p>
        )}
      </div>
    </div>
  );
} 