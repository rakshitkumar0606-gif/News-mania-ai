import { createServerFn } from "@tanstack/react-start";
import type { NewsArticle, NewsCategory, Language } from "./news-types";

const NEWS_API_KEY = "pub_901f5a3a2138421a8b459b2eeb7b96a5";
const NEWS_API_BASE = "https://newsdata.io/api/1/latest";

function mapLang(lang: Language): string {
  if (lang === "hi" || lang === "mr") return "en";
  return lang;
}

interface FetchInput {
  category?: NewsCategory;
  query?: string;
  language?: Language;
  page?: number;
  pageToken?: string | null;
  pageSize?: number;
  country?: string;
}

export const fetchNews = createServerFn({ method: "POST" })
  .inputValidator((d: FetchInput) => d)
  .handler(async ({ data }): Promise<{ articles: NewsArticle[]; total: number; error?: string; nextPage?: string }> => {
    const lang = mapLang(data.language ?? "en");

    try {
      const params = new URLSearchParams({
        apikey: NEWS_API_KEY,
        language: lang,
      });

      if (data.query && data.query.trim()) {
        params.set("q", data.query.trim());
      } else {
        const cat = data.category ?? "general";
        if (cat !== "general") {
          // newsdata.io categories: business, entertainment, environment, food, health, politics, science, sports, technology, top, world, tourism
          params.set("category", cat);
        }
        params.set("country", data.country ?? "us");
      }

      if (data.pageToken) {
        params.set("page", data.pageToken);
      }

      const url = `${NEWS_API_BASE}?${params}`;

      const res = await fetch(url, {
        headers: { "User-Agent": "NewsManiaAI/1.0" },
      });
      const json = await res.json() as any;

      if (!res.ok || json.status !== "success") {
        console.error("NewsData API error", res.status, json);
        const msg = json.resultsMessage ?? `News service error (${res.status}).`;
        return { articles: [], total: 0, error: msg };
      }

      return {
        articles: (json.results || [])
          .filter((a: any) => a.title)
          .map((a: any) => ({
            url: a.link,
            title: a.title,
            description: a.description,
            image: a.image_url,
            publishedAt: a.pubDate,
            source: { name: a.source_id || a.source_name || "News", url: a.link },
            content: a.content && a.content !== "ONLY AVAILABLE IN PAID PLANS" ? a.content : null,
          })),
        total: json.totalResults || 0,
        nextPage: json.nextPage,
      };
    } catch (err) {
      console.error("fetchNews failed", err);
      return { articles: [], total: 0, error: "Failed to load news. Please try again." };
    }
  });
