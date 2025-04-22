'use client';

interface FormatSelectorProps {
  onFormatSelect: (format: string) => void;
}

export default function FormatSelector({ onFormatSelect }: FormatSelectorProps) {
  const formats = ['Twitter/X Thread', 'LinkedIn Post', 'Instagram Caption'];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Select Format</h2>
      <div className="space-y-2">
        {formats.map((format) => (
          <button
            key={format}
            type="button"
            className="w-full p-3 text-left border rounded-lg hover:bg-gray-50 cursor-pointer"
            onClick={() => onFormatSelect(format)}
          >
            {format}
          </button>
        ))}
      </div>
    </div>
  );
} 