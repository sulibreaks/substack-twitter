// src/lib/substackLinkToText.ts
import * as cheerio from 'cheerio';

export async function substackLinkToText(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch Substack content');
  }

  const html = await res.text();
  const $ = cheerio.load(html);

  const article = $('article').first();

  article.find('header, footer, .share-buttons, .subscribe-widget, script, style').remove();

  const text = article.text().trim();

  if (!text || text.length < 100) {
    throw new Error('Could not extract meaningful content from Substack post.');
  }

  return text;
}
