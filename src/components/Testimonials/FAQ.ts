// -----------------------------
// FAQ.ts
// -----------------------------

export type FAQ = {
  slug: string;        // built from documentId/id if slug not present
  Question: string;    // normalized: question | Question | Title | title
  Answer: string;      // normalized: answer | Answer
  Category?: string;   // reserved if you later add it
  Order?: number;      // reserved if you later add it
};

export type FAQs = FAQ[];

// Change this to match your Strapi collection name if different
const FAQS_API = "/api/thero-faqs";

// Env
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "";
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";

/** Normalize a Strapi node into our strict FAQ type */
function toFAQ(node: any): FAQ {
  // Accept both { id, attributes: {...} } and flattened nodes
  const n = node?.attributes ? { id: node.id, ...node.attributes } : node ?? {};

  const slug =
    n.slug ??
    n.Slug ??
    n.documentId ??
    n.id ??
    (typeof crypto !== "undefined" && (crypto as any)?.randomUUID
      ? (crypto as any).randomUUID()
      : `faq-${Date.now()}`);

  const Question =
    n.Question ?? n.question ?? n.Title ?? n.title ?? "Untitled question";

  const Answer = n.Answer ?? n.answer ?? "";

  // Optional fields (you can remove if not needed)
  const Category = n.Category ?? n.category ?? undefined;

  // If you later add a top-level "order" field, we’ll parse it safely:
  const orderRaw = n.Order ?? n.order;
  const orderParsed =
    typeof orderRaw === "number"
      ? orderRaw
      : orderRaw != null
      ? Number.parseFloat(String(orderRaw))
      : undefined;
  const Order =
    typeof orderParsed === "number" && Number.isFinite(orderParsed)
      ? orderParsed
      : undefined;

  return { slug: String(slug), Question, Answer, Category, Order };
}

/** Strapi fetch helper with optional bearer */
async function strapiFetch<T>(url: string): Promise<T> {
  const headers: HeadersInit = { "Content-Type": "application/json" };
  if (STRAPI_TOKEN) headers["Authorization"] = `Bearer ${STRAPI_TOKEN}`;

  const res = await fetch(url, { method: "GET", headers });
  if (!res.ok) throw new Error(`HTTP ${res.status} on ${url}`);
  return res.json();
}

// Local fallback so UI still renders without Strapi
const fallbackFAQs: ReadonlyArray<FAQ> = [
  {
    slug: "how-this-work",
    Question: "How this work?",
    Answer:
      "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
  },
  {
    slug: "additional-fee",
    Question: "Are there any additional fee?",
    Answer:
      "Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.",
  },
  {
    slug: "how-get-app",
    Question: "How can I get the app?",
    Answer:
      "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.",
  },
];

/** Fetch all FAQs (sorted newest first by publishedAt, then createdAt) */
export async function fetchFAQs(): Promise<FAQs> {
  if (!STRAPI_URL) {
    console.warn("⚠️ NEXT_PUBLIC_STRAPI_URL not defined, using fallback FAQs");
    return [...fallbackFAQs];
  }

  // If you later add a top-level "order" field, change the sort to:
  // `&sort=order:asc,publishedAt:desc,createdAt:desc`
  const url =
    `${STRAPI_URL}${FAQS_API}` +
    `?populate=*` +
    `&sort=publishedAt:desc,createdAt:desc` +
    `&pagination[page]=1&pagination[pageSize]=100`;

  try {
    const json = await strapiFetch<{ data: any[] }>(url);
    const rows = json?.data ?? [];
    return rows.length ? rows.map(toFAQ) : [...fallbackFAQs];
  } catch (e) {
    console.error("❌ fetchFAQs failed, using fallback:", e);
    return [...fallbackFAQs];
  }
}

/** Fetch single latest FAQ (newest by publishedAt/createdAt) */
export async function fetchLatestFAQ(): Promise<FAQ | null> {
  if (!STRAPI_URL) {
    console.warn("⚠️ NEXT_PUBLIC_STRAPI_URL not defined, using fallback FAQ");
    return fallbackFAQs[0] ?? null;
  }

  const url =
    `${STRAPI_URL}${FAQS_API}` +
    `?populate=*` +
    `&pagination[page]=1&pagination[pageSize]=1` +
    `&sort=publishedAt:desc,createdAt:desc`;

  try {
    const json = await strapiFetch<{ data: any[] }>(url);
    const node = json?.data?.[0];
    return node ? toFAQ(node) : fallbackFAQs[0] ?? null;
  } catch (e) {
    console.error("❌ fetchLatestFAQ failed, using fallback:", e);
    return fallbackFAQs[0] ?? null;
  }
}
