export default function OutputPreview() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Preview</h2>
      <div className="p-4 bg-gray-50 rounded-md min-h-[200px]">
        <p className="text-gray-500">Your converted content will appear here...</p>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Copy to Clipboard
      </button>
    </div>
  )
} 