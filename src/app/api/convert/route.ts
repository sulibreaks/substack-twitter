import { OpenAI } from 'openai';
import { substackLinkToText } from '../../../utils/substackLinkToText';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { content, format } = await req.json();
    console.log('Received:', { content, format });

    // If input is a Substack URL, fetch the real content
    const isUrl = content.startsWith('http');
    const actualContent = isUrl ? await substackLinkToText(content) : content;

    const prompt = `Convert the following blog post into a ${format}. Keep the author's voice:\n\n${actualContent}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // You can use 'gpt-4' if you have access
      messages: [
        {
          role: 'system',
          content: "You are a formatting assistant. Take long-form text and reshape it for a specific platform: Twitter/X (threads), LinkedIn (professional posts), or Instagram (caption-style). Keep the writer's voice and personality. Don't change the tone. Don't add new ideas. Just condense and format the content to suit the platform's conventions."
        },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
    });

    const aiText = completion.choices[0].message.content;

    return new Response(JSON.stringify({ result: aiText }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'AI conversion failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 