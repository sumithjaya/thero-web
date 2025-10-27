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
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string; // ISO format
  prettyDate: string; // formatted string
  category: string;
  coverImage: string; // ✅ correct name
  content: ContentBlock[]; // ✅ correct name
};

export const CATEGORIES = ["Planning", "Super", "Investing"] as const;
export type Category = (typeof CATEGORIES)[number];

// -----------------------------
// Static Local Fallback (optional, good for dev or downtime)
// -----------------------------
const fallbackPosts: ReadonlyArray<Post> = [
  {
    slug: "retirement-checklist-2025",
    title: "Your 2025 Retirement Readiness Checklist",
    excerpt:
      "A practical, 7-step list to pressure-test your plan in 30 minutes.",
    author: "Alice Johnson",
    date: "2025-10-20",
    prettyDate: "Oct 20, 2025",
    category: "Planning",
    coverImage: "/images/blog/retirement-checklist.jpg",
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
        p: "If one thing goes wrong, your plan shouldn’t implode.",
      },
    ],
  },
  {
    slug: "super-fees-explained",
    title: "Super Fees: What Actually Matters",
    excerpt:
      "Cut the noise. Here’s how to compare funds without getting lost in PDFs.",
    author: "Bob Smith",
    date: "2025-09-12",
    prettyDate: "Sep 12, 2025",
    category: "Super",
    coverImage: "/images/blog/super-fees.jpg",
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
    slug: "sequence-risk",
    title: "Sequence Risk: The Retirement Killer You Don’t See Coming",
    excerpt: "Order of returns can wreck a plan. Here’s how to blunt it.",
    author: "Clara Lee",
    date: "2025-08-03",
    prettyDate: "Aug 3, 2025",
    category: "Investing",
    coverImage: "/images/blog/sequence-risk.jpg",
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

/**
 * Build an absolute media URL using NEXT_PUBLIC_STRAPI_URL.
 */
export function toAbsUrl(url?: string): string | null {
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url; // already absolute
  const base = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/+$/, "");
  return base ? `${base}${url}` : url;
}
export function toPost(node: any): Post {
  const a = node ?? {};

  // ✅ Use Title, Content, CoverImage from API
  const imgUrl = toAbsUrl(a?.CoverImage?.url) ?? "/images/placeholder.jpg";

  const isoDate = a.CreatedDate || a.createdAt || new Date().toISOString();
  const pretty = new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // ✅ Content is rich text (SlateJS-style), so we transform it
  const contentBlocks: ContentBlock[] = Array.isArray(a.Content)
    ? a.Content.map((block: any) => ({
        p: block?.children?.[0]?.text ?? undefined, // simple extraction
        h2: block?.type === "heading" ? block.children?.[0]?.text : undefined,
        ul: undefined, // You can expand later
      }))
    : [];

  return {
    slug: a.slug ?? a.documentId, // fallback to documentId if no slug field yet
    title: a.Title ?? "",
    excerpt: a?.Content?.[0]?.children?.[0]?.text?.substring(0, 120) + "..." ?? "",
    author: "Admin", // You can map this when available
    date: isoDate,
    prettyDate: pretty,
    category: "General", // Map if category field exists
    coverImage: imgUrl,
    content: contentBlocks,
  };
}

export async function fetchPosts(): Promise<Post[]> {
  const base = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!base) return [...fallbackPosts];

  try {
    const res = await fetch(`${base}/api/thero-posts?populate=*`, {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 30 },
    });

    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

    const json = await res.json();
    return json.data.map(toPost);
  } catch (err) {
    console.error("🚨 Strapi fetch failed, using fallback:", err);
    return [...fallbackPosts];
  }
}
