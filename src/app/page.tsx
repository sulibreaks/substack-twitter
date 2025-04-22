'use client';

import { useState } from 'react';
import PostInputForm from '../components/PostInputForm';
import FormatSelector from '../components/FormatSelector';
import OutputPreview from '../components/OutputPreview';

export default function Home() {
  const [postContent, setPostContent] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [convertedContent, setConvertedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleConvert = async () => {
    if (!postContent || !selectedFormat) return;
    setIsLoading(true);

    try {
      const response = await fetch('/api/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: postContent, format: selectedFormat }),
      });

      const data = await response.json();
      setConvertedContent(data.result || data.convertedContent);
    } catch (error) {
      console.error('Conversion error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-serif flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-xl space-y-8">
        <div className="w-full max-w-xl bg-white border border-gray-200 shadow-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl font-serif font-bold text-center tracking-tight">
            Substack to Social Media
          </h1>
          <p className="text-center text-gray-500 font-sans text-lg leading-relaxed max-w-xl mx-auto">
            Convert your long-form posts into threads, captions, or professional updates — without losing your voice.
          </p>

          <PostInputForm onContentChange={setPostContent} />
          <FormatSelector onFormatSelect={setSelectedFormat} />

          <button
            onClick={handleConvert}
            disabled={!postContent || !selectedFormat || isLoading}
            className="w-full py-3 px-5 bg-black text-white rounded-md font-medium tracking-wide hover:bg-gray-800 disabled:bg-gray-300 transition-all"
          >
            {isLoading ? 'Converting...' : 'Convert Content'}
          </button>

          {convertedContent && <OutputPreview content={convertedContent} />}
        </div>
      </div>
    </main>
  );
}
