import { NextResponse } from "next/server";

export const revalidate = 900;

type Headline = {
  title: string;
  url: string;
  source: string;
  publishedAt: string | null;
};

const FEEDS = [
  { url: "https://techcrunch.com/feed/", source: "TechCrunch" },
  { url: "https://www.theverge.com/rss/index.xml", source: "The Verge" },
  { url: "https://feeds.arstechnica.com/arstechnica/index", source: "Ars Technica" },
];

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code: string) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/\s+/g, " ")
    .trim();
}

function tagValue(xml: string, tag: string) {
  const match = xml.match(new RegExp(`<(?:\\w+:)?${tag}\\b[^>]*>([\\s\\S]*?)<\\/(?:\\w+:)?${tag}\\s*>`, "i"));
  return match?.[1] ? decodeXml(match[1]) : "";
}

function parseFeed(xml: string, source: string): Headline[] {
  const blocks = [...xml.matchAll(/<(item|entry)\b[^>]*>[\s\S]*?<\/\1>/gi)].map((m) => m[0]);
  return blocks.map((block) => {
    const title = tagValue(block, "title");
    const linkTag = block.match(/<(?:\w+:)?link\b([^>]*)>([\s\S]*?)<\/(?:\w+:)?link\s*>/i);
    const linkHref = block.match(/<(?:\w+:)?link\b[^>]*\bhref=["']([^"']+)["'][^>]*\/?\s*>/i)?.[1];
    const linkText = linkTag?.[2] ? decodeXml(linkTag[2]) : "";
    const url = linkHref || linkText || block.match(/<(?:\w+:)?link\b[^>]*>([^<]+)</i)?.[1]?.trim() || "";
    const published = tagValue(block, "pubDate") || tagValue(block, "published") || tagValue(block, "updated") || tagValue(block, "dc:date");
    return {
      title,
      url: decodeXml(url),
      source,
      publishedAt: published && !Number.isNaN(Date.parse(published)) ? new Date(published).toISOString() : null,
    };
  }).filter((item) => item.title.length > 12 && /^https?:\/\//i.test(item.url));
}

export async function GET() {
  const results = await Promise.allSettled(
    FEEDS.map(async ({ url, source }) => {
      const response = await fetch(url, {
        headers: { "User-Agent": "TheUdayTimes/1.0 (technology headlines reader)" },
        next: { revalidate: 900 },
        signal: AbortSignal.timeout(7000),
      });
      if (!response.ok) throw new Error(`Feed unavailable: ${source}`);
      return parseFeed(await response.text(), source);
    }),
  );

  const headlines = results
    .flatMap((result) => result.status === "fulfilled" ? result.value : [])
    .filter((item, index, all) => all.findIndex((other) => other.url === item.url) === index)
    .sort((a, b) => {
      if (!a.publishedAt) return 1;
      if (!b.publishedAt) return -1;
      return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
    })
    .slice(0, 24);

  return NextResponse.json(
    { headlines, updatedAt: new Date().toISOString(), available: headlines.length > 0 },
    { headers: { "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600" } },
  );
}
