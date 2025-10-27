import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles2 from "./BlogPost.module.css";
import { fetchPosts, toPost } from "../posts"; // <-- you already have this

// ✅ Fetch a single post by slug
async function fetchPostBySlug(slug: string) {
  const base = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!base) throw new Error("NEXT_PUBLIC_STRAPI_URL not defined");

  const res = await fetch(
    `${base}/api/posts?filters[slug][$eq]=${slug}&populate=image,content`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return null;

  const json = await res.json();
  const node = json.data?.[0];
  return node ? toPost(node) : null;
}

// ✅ Metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await fetchPostBySlug(params.slug);
  if (!post)
    return {
      title: "Post not found | Blog",
      description: "This post does not exist.",
    };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const p = await fetchPostBySlug(params.slug);

  if (!p) {
    return <div className="p-8 text-center text-gray-500">❌ Post not found</div>;
  }

  return (
    <div className="font-sans min-h-screen pb-20">
      {/* Hero banner */}
      <header className={styles2.postHero}>
        <div className={styles2.postHeroInner}>
          <div className={styles2.postBadge}>{p.category}</div>
          <h1 className={styles2.postTitle}>{p.title}</h1>
          <div className={styles2.postMeta}>
            <span>{p.author}</span>
            <span>•</span>
            <time dateTime={p.date}>{p.prettyDate}</time>
          </div>
        </div>
      </header>

      {/* Feature image */}
      <div className={styles2.featureImageWrap}>
        <Image
          src={p.image}
          alt={p.title}
          fill
          className={styles2.featureImage}
          priority
        />
      </div>

      {/* Content */}
      <main className={styles2.postContent}>
        {p.content.map((block, i) => (
          <section key={i} className={styles2.contentBlock}>
            {block.h2 && <h2 className={styles2.h2}>{block.h2}</h2>}
            {block.p && <p className={styles2.p}>{block.p}</p>}
            {block.ul && (
              <ul className={styles2.ul}>
                {block.ul.map((li, idx) => (
                  <li key={idx}>{li}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* CTA Section */}
        <div className={styles2.ctaBar}>
          <div>
            <h3 className={styles2.ctaTitle}>Will I have enough money?</h3>
            <p className={styles2.ctaSubtitle}>
              Find out if your income will be sufficient in the years ahead.
            </p>
          </div>
          <Link href="/calculators" className={styles2.ctaButton}>
            Run the calculator
          </Link>
        </div>
      </main>
    </div>
  );
}
