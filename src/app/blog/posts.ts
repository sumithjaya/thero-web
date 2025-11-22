// app/blog/posts.ts

// -----------------------------
// Types & Constants
// -----------------------------
export type ContentBlock = {
  p?: string;
  h2?: string;
  ul?: string[];
};

export type Post = {
  id: string; // Changed from slug to id
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string; // ISO format
  prettyDate: string; // formatted string
  category: string;
  coverImage: string;
  content: ContentBlock[];
  tags: string[];
};

export type FAQ={
  slug: string;
  question: string;
  answer: string;
}

  export const CATEGORIES = ["Planning", "Super", "Investing"] as const;
  export type Category = (typeof CATEGORIES)[number];

  // Env (frontend)
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "";
  const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";

// -----------------------------
// Static Local Fallback
// -----------------------------
const fallbackPosts: ReadonlyArray<Post> = [
  {
    id: "1",
    slug: "retirement-checklist-2025",
    title: "Your 2025 Retirement Readiness Checklist",
    excerpt:
      "A practical, 7-step list to pressure-test your plan in 30 minutes.",
    author: "Alice Johnson",
    date: "2025-10-20",
    prettyDate: "Oct 20, 2025",
    category: "Planning",
    coverImage: "/images/blog1.jpg",
    tags: ["retirement", "plan", "checklist"],
    content: [
      {
        p: "This is the blunt, no-BS checklist we use with clients before year-end.",
      },
      {
        h2: "1) Cash buffer",
        p: "Target 6–12 months of essential expenses in a high-interest account.",
      },
      {
        h2: "2) Contributions",
        ul: [
          "Max employer match",
          "Consider salary sacrifice",
          "Avoid end-of-year scramble",
        ],
      },
      {
        h2: "3) Insurance sanity check",
        p: "If one thing goes wrong, your plan shouldn't implode.",
      },
    ],
  },
  {
    id: "2",
    slug: "super-fees-explained",
    title: "Super Fees: What Actually Matters",
    excerpt:
      "Cut the noise. Here's how to compare funds without getting lost in PDFs.",
    author: "Bob Smith",
    date: "2025-09-12",
    prettyDate: "Sep 12, 2025",
    category: "Super",
    coverImage: "/images/blog2.jpg",
    tags: ["super", "fees", "comparison"],
    content: [
      {
        p: "Fees compound too — just like returns. Tiny percentages matter over decades.",
      },
      {
        h2: "The signal",
        ul: [
          "Administration fee",
          "Investment fee",
          "Performance fees (when they exist)",
        ],
      },
      {
        h2: "The noise",
        p: "Marketing names, seasonal offers, shiny apps. Look at the PDS and compare apples to apples.",
      },
    ],
  },
  {
    id: "3",
    slug: "sequence-risk",
    title: "Sequence Risk: The Retirement Killer You Don't See Coming",
    excerpt: "Order of returns can wreck a plan. Here's how to blunt it.",
    author: "Clara Lee",
    date: "2025-08-03",
    prettyDate: "Aug 3, 2025",
    category: "Investing",
    coverImage: "/images/blog3.jpg",
    tags: ["sequence", "risk", "retirement"],
    content: [
      {
        p: "Two portfolios with the same average return can produce wildly different outcomes if the bad years hit early.",
      },
      {
        h2: "Mitigations",
        ul: [
          "Dynamic withdrawal rules",
          "Cash bucket for 2–3 years",
          "Rebalance discipline",
        ],
      },
    ],
  },
];

// -----------------------------
// Utility Functions
// -----------------------------
export function toAbsUrl(url?: string): string | null {
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  const base = STRAPI_URL.replace(/\/+$/, "");
  return base ? `${base}${url}` : url;
}

function safeExcerptFromContent(content: any[]): string {
  const firstText: string | undefined =
    content?.[0]?.children?.[0]?.text?.toString();
  if (!firstText) return "";
  const trimmed = firstText.trim();
  if (!trimmed) return "";
  const slice = trimmed.length > 120 ? `${trimmed.slice(0, 120)}…` : trimmed;
  return slice;
}

// Map Strapi node (your API is flattened: Title/Content/CoverImage at root)
export function toPost(node: any): Post {
  const a = node ?? {};
 
  const imgUrl =
    toAbsUrl(a?.CoverImage?.url) ??
    toAbsUrl(a?.CoverImage?.data?.attributes?.url) ??
    "/images/placeholder.jpg";

  const isoDate: string =
    a.CreatedDate || a.publishedAt || a.createdAt || new Date().toISOString();

  const pretty = new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const contentBlocks: ContentBlock[] = Array.isArray(a.Content)
    ? a.Content.map((block: any) => ({
        h2: block?.type === "heading" ? block?.children?.[0]?.text : undefined,
        p: block?.type === "paragraph" ? block?.children?.[0]?.text : undefined,
        ul: undefined, // extend when you add lists
      }))
    : [];

  const tags = Array.isArray(a.Tags)
    ? a.Tags.filter((tag: any) => tag?.Slug === "tag").map((tag: any) => ({
        Title: tag.Title,
        Slug: tag.Slug,
      }))
    : [];
 
  
  // Get ID - prioritize documentId, then id, then slug as fallback
  const postId = a.documentId ?? String(a.id ?? a.slug ?? "");
  
  return {
    id: postId,
    slug: a.slug ?? postId,
    title: a.Title ?? "",
    excerpt: safeExcerptFromContent(a.Content) || "",
    author: a.Author ?? "Admin",
    date: isoDate,
    prettyDate: pretty,
    category: a.Category ?? "General",
    coverImage: imgUrl,
    content: contentBlocks,
    tags: tags,
  };
}

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

export async function fetchPosts(): Promise<Post[]> {
  if (!STRAPI_URL) return [...fallbackPosts];

  try {
    const json = await strapiFetch<{ data: any[] }>(
      `/api/thero-posts?populate=*&sort[0]=createdAt:desc`
    );
    return (json.data ?? []).map(toPost);
  } catch (err) {
    console.error("🚨 Strapi fetch failed, using fallback:", err);
    return [...fallbackPosts];
  }
}

/** Fetch a single post by ID (documentId) */
export async function fetchPostById(id: string): Promise<Post | null> {
  if (!STRAPI_URL) {
    // Return fallback post if it exists
    const fallback = fallbackPosts.find((p) => p.id === id);
    return fallback ?? null;
  }

  try {
    
    
    // Fetch directly by document ID using the single endpoint
    const json = await strapiFetch<{ data: any }>(
      `/api/thero-posts/${id}?populate=*`
    );

    
    const node = json.data;
    
    if (!node) {
     
      // Try fallback
      const fallback = fallbackPosts.find((p) => p.id === id);
      return fallback ?? null;
    }

     
    const post = toPost(node);
     
    return post;
  } catch (err) {
    console.error("❌ fetchPostById failed:", err);
    // Try fallback on error
    const fallback = fallbackPosts.find((p) => p.id === id);
    return fallback ?? null;
  }
}

/** Fetch a single post by slug (kept for compatibility) */
export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  if (!STRAPI_URL) {
    // Return fallback post if it exists
    const fallback = fallbackPosts.find((p) => p.slug === slug);
    return fallback ?? null;
  }

  try {
    
    const q = encodeURIComponent(slug);
    const json = await strapiFetch<{ data: any[] }>(
      `/api/thero-posts?populate=*&filters[slug][$eq]=${q}&pagination[page]=1&pagination[pageSize]=1`
    );

    
    const node = json.data?.[0];
    
    if (!node) {
      
      // Try fallback
      const fallback = fallbackPosts.find((p) => p.slug === slug);
      return fallback ?? null;
    }

     
    const post = toPost(node);
    
    return post;
  } catch (err) {
    console.error("❌ fetchPostBySlug failed:", err);
    // Try fallback on error
    const fallback = fallbackPosts.find((p) => p.slug === slug);
    return fallback ?? null;
  }
}

/** Latest post (by CreatedDate -> publishedAt -> createdAt) */
export async function fetchLatestPost(): Promise<Post | null> {
  if (!STRAPI_URL) return fallbackPosts[0] ?? null;

  try {
     const json = await strapiFetch<{ data: any[] }>(
      `/api/thero-testimonial?populate=*&sort[0]=CreatedDate:desc&sort[1]=publishedAt:desc&sort[2]=createdAt:desc`
    );
    const node = json.data?.[0];
    return node ? toPost(node) : fallbackPosts[0] ?? null;
  } catch (e) {
    console.error("❌ fetchLatestPost failed:", e);
    return fallbackPosts[0] ?? null;
  }
}


export async function fetchFAQ(slug: string): Promise<FAQ | null> {
  if (!STRAPI_URL || !slug) return null;

  try {
    const q = encodeURIComponent(slug);
    const json = await strapiFetch<{ data: any[] }>(
      `/api/thero-faqs?populate=*&filters[slug][$eq]=${q}&pagination[page]=1&pagination[pageSize]=1`
    );

    const row = json.data?.[0];
    if (!row) return null;

    // Accept both flat and attributes-shaped rows
    const a = row.attributes ?? row;

    const faq: FAQ = {
      slug: a.slug ?? a.Slug ?? "",
      question: a.Question ?? a.question ?? "",
      answer: a.Answer ?? a.answer ?? "",
    };
    return faq.slug ? faq : null;
  } catch (e) {
    console.error("❌ fetchFAQ failed:", e);
    return null;
  }
}