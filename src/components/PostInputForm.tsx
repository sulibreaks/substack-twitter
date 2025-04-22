'use client';

interface PostInputFormProps {
  onContentChange: (content: string) => void;
}

export default function PostInputForm({ onContentChange }: PostInputFormProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Enter Your Content</h2>
      <textarea
        className="w-full p-4 border rounded-lg min-h-[200px]"
        placeholder="Paste your Substack content here..."
        onChange={(e) => onContentChange(e.target.value)}
      />
    </div>
  );
} 