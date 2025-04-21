export default function FormatSelector() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Select output format</h2>
      <div className="space-y-2">
        <button className="w-full p-3 text-left border rounded-md hover:bg-gray-50">
          Twitter/X Thread
        </button>
        <button className="w-full p-3 text-left border rounded-md hover:bg-gray-50">
          LinkedIn Post
        </button>
        <button className="w-full p-3 text-left border rounded-md hover:bg-gray-50">
          Instagram Caption
        </button>
      </div>
    </div>
  )
} 