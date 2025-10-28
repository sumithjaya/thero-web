export type Testimonial = {
    name: string;
    quote: string;
    avatar: string;
};

export type Testimonials = Testimonial[];
export const CATEGORIES = ["Planning", "Super", "Investing"] as const;
export type Category = (typeof CATEGORIES)[number];
 
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "";
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";

// -----------------------------
// Fetchers
// -----------------------------
async function strapiFetch<T>(path: string, init: RequestInit = {}) {
  if (!STRAPI_URL) {
    console.warn("NEXT_PUBLIC_STRAPI_URL missing: using fallback data.");
    return { data: [] } as T;
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (STRAPI_TOKEN) headers.Authorization = `Bearer ${STRAPI_TOKEN}`;

  const res = await fetch(`${STRAPI_URL}${path}`, {
    ...init,
    headers,
    next: { revalidate: 60 }, // ISR cache
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} on ${path}`);
  return res.json() as Promise<T>;
}

export async function getTestimonials(): Promise<Testimonials> {

     try {
        const json = await strapiFetch<{ data: any[] }>(
          `/api/thero-testimonials?populate=*&sort[0]=createdAt:desc`
        );
        return (json.data ?? []).map();
      } catch (err) {
        console.error("🚨 Strapi fetch failed, using fallback:", err);
        return [...fallbackPosts];
      }
    return [];
}