// -----------------------------
// Testimonials (aligned to your type)
// -----------------------------
export type Testimonial = {
  slug: string;
  ClientName: string;
  Testimonial: string;
  rating: number;
  Avatar: string; // absolute URL (or local fallback)
};

export type Testimonials = Testimonial[];

const TESTIMONIALS_API = "/api/thero-testimonials";

// Get STRAPI_URL from environment variables
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

export function toAbsUrl(url?: string): string | null {
  if (!url) return null;

  // If url already absolute (starts with http or https), return it
  if (/^https?:\/\//i.test(url)) return url;

  // Clean base URL (remove trailing slash)
  const base = STRAPI_URL?.replace(/\/+$/, "") ?? "";

  // If no STRAPI_URL is defined, fallback to raw url
  return base ? `${base}${url}` : url;
}

// Local fallback so UI still renders without Strapi
const fallbackTestimonials: ReadonlyArray<Testimonial> = [
  {
    slug: "robert-smith",
    ClientName: "cc Robert Smith",
    Testimonial:
      "Very helpful in urgent moments. Clear, actionable advice without fluff.",
    rating: 5,
    Avatar: "/images/client1.jpg",
  },
  {
    slug: "emily-chen",
    ClientName: "cc Emily Chen",
    Testimonial:
      "Saved me hours. Straight talk, practical tips — exactly what I needed.",
    rating: 5,
    Avatar: "/images/client2.jpg",
  },
];

function toTestimonial(node: any): Testimonial {
  // Accept both { id, attributes: {...} } and flattened nodes
  const n = node?.attributes ? { id: node.id, ...node.attributes } : node ?? {};

  // Map possible field names from Strapi to your strict type
  const slug =
    n.slug ?? n.Slug ?? n.documentId ?? n.id ?? 
    (typeof crypto !== "undefined" && crypto?.randomUUID ? crypto.randomUUID() : `fallback-${Date.now()}`);
  const ClientName = n.ClientName ?? n.ClientName ?? "";
  const Testimonial =
    n.Testimonial ??  "";

  // Rating can come as number or string; clamp 0..5, default 5
  const ratingRaw = n.Rating ?? n.rating;
  const ratingParsed =
    typeof ratingRaw === "number"
      ? ratingRaw
      : ratingRaw != null
      ? Number.parseFloat(String(ratingRaw))
      : NaN;
  const rating = Number.isFinite(ratingParsed)
    ? Math.max(0, Math.min(5, ratingParsed))
    : 5;

  // Avatar from media (handles Strapi media or plain string), then fallback
  const avatarAbs = n?.Avatar?.url ? `${STRAPI_URL}${n?.Avatar?.url}`: null;
   console.log("avatarAbs", avatarAbs);
   const avatarUrl = n?.Avatar?.url || "/images/avatar-placeholder.jpg";
   console.log("avatarUr.l", n.Avatar);
console.log("Avatar URL:", avatarUrl);
  const Avatar = avatarAbs ?? "/images/avatar-placeholder.jpg";

  return { slug: String(slug), ClientName, Testimonial, rating, Avatar };
}

// Strapi fetch helper with authentication
async function strapiFetch<T>(url: string): Promise<T> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // Add authorization header if token is available
  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

/** Fetch all testimonials (newest first) */
export async function fetchTestimonials(): Promise<Testimonials> {
  if (!STRAPI_URL) {
    console.warn("⚠️ STRAPI_URL not defined, using fallback testimonials");
    return [...fallbackTestimonials];
  }

  try {
    const json = await strapiFetch<{ data: any[] }>(
      `${STRAPI_URL}${TESTIMONIALS_API}?populate=*&sort[0]=publishedAt:desc&sort[1]=createdAt:desc`
    );
    const rows = json?.data ?? [];
    console.log("✅ Loaded testimonials rows:", rows);
    return rows.length ? rows.map(toTestimonial) : [...fallbackTestimonials];
  } catch (e) {
    console.error("❌ fetchTestimonials failed, using fallback:", e);
    return [...fallbackTestimonials];
  }
}

/** Fetch single latest testimonial */
export async function fetchLatestTestimonial(): Promise<Testimonial | null> {
  if (!STRAPI_URL) {
    console.warn("⚠️ STRAPI_URL not defined, using fallback testimonial");
    return fallbackTestimonials[0] ?? null;
  }

  try {
    const json = await strapiFetch<{ data: any[] }>(
      `${STRAPI_URL}${TESTIMONIALS_API}?populate=*&sort[1]=publishedAt:desc&sort[2]=createdAt:desc`
    );
    const node = json?.data?.[0];
    return node ? toTestimonial(node) : fallbackTestimonials[0] ?? null;
  } catch (e) {
    console.error("❌ fetchLatestTestimonial failed:", e);
    return fallbackTestimonials[0] ?? null;
  }
}