const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

async function strapiFetch<T>(path: string, options: RequestInit = {}) {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (STRAPI_TOKEN) headers.Authorization = `Bearer ${STRAPI_TOKEN}`;

  const res = await fetch(`${STRAPI_URL}${path}`, {
    ...options,
    headers,
    next: { revalidate: 600 },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json() as Promise<T>;
}

export async function getPosts(category?: string) {
  const filter = category ? `&filters[category][$eq]=${encodeURIComponent(category)}` : "";
  // ✅ use bracket populate (or swap to populate=* if you prefer)
  return strapiFetch<{ data: any[] }>(
    `/api/thero-posts?populate[image]=*&populate[content][populate]=*&sort[0]=date:desc${filter}`
  );
}

export async function getPostBySlug(slug: string) {
  return (
    await strapiFetch<{ data: any[] }>(
      `/api/thero-posts?filters[slug][$eq]=${encodeURIComponent(
        slug
      )}&populate[image]=*&populate[content][populate]=*`
    )
  ).data?.[0] ?? null;
}
