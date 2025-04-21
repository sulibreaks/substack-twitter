import PostInputForm from '@/components/PostInputForm'
import FormatSelector from '@/components/FormatSelector'
import OutputPreview from '@/components/OutputPreview'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Substack to Social Media Converter
        </h1>
        <div className="text-center">
          <h2 className="text-2xl text-gray-600">Hello from Cursor MVP 👋</h2>
        </div>
        <div className="space-y-6">
          <PostInputForm />
          <FormatSelector />
          <OutputPreview />
        </div>
      </div>
    </main>
  )
}
