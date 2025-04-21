export default function PostInputForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Paste your Substack post</h2>
      <textarea
        className="w-full h-40 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Paste your Substack post content here..."
      />
    </div>
  )
} 