import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles2 from "./BlogPost.module.css";
import { toPost } from "../posts";

// ✅ Fetch a single post by slug (using documentId as slug)
async function fetchPostBySlug(slug: string) {
  const base = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!base) throw new Error("NEXT_PUBLIC_STRAPI_URL not defined");
  
  try {
    // Use the direct endpoint with slug (documentId)
    const res = await fetch(
      `${base}/api/thero-posts/${slug}?populate=*`,
      { 
        next: { revalidate: 60 },
        cache: 'no-store'
      }
    );
    
    if (!res.ok) {
      console.error(`Strapi responded with status: ${res.status}`);
      return null;
    }
    
    const json = await res.json();
    console.log("📦 Strapi response:", json);
    
    const node = json.data;
    if (!node) {
      console.log("❌ No post found with slug:", slug);
      return null;
    }
    
    return toPost(node);
  } catch (error) {
    console.error("🚨 Strapi fetch failed:", error);
    return null;
  }
}

// ✅ Metadata for SEO - UPDATED FOR NEXT.JS 15
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

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
      images: [post.coverImage],
    },
  };
}

// ✅ Main component - UPDATED FOR NEXT.JS 15
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = await fetchPostBySlug(slug);

  if (!p) {
    return (
      <div className="p-8 text-center text-gray-500">
        <h1 className="text-2xl font-bold mb-4">❌ Post not found</h1>
        <p className="mb-4">Slug: {slug}</p>
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="font-sans min-h-screen pb-20">
      {/* Hero banner */}
      <header className={styles2.postHero}>
        <div className={styles2.postHeroInner}> 
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
          src={p.coverImage}
          alt={p.title}
          fill
          className={styles2.featureImage}
          priority
        />
      </div>

      {/* Content */}
      <main className={styles2.postContent}>
        {p.content && p.content.length > 0 ? (
          p.content.map((block, i) => (
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
          ))
        ) : (
          <p className="text-gray-500 text-center py-8">No content available</p>
        )}

       
         
      </main>
    </div>
  );
}