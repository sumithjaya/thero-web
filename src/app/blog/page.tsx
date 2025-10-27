"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Blog.module.css";
import type { Post } from "./posts";
import { fetchLatestPost, fetchPosts } from "./posts"; // ✅ Import dynamic fetch function
import { useEffect, useState } from "react";
import HeroBlog from "@/components/hero/HeroBlog";

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [latestPost, setLatestPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const dataLastPost = await fetchLatestPost();
        const data = await fetchPosts(); // ✅ Fetch dynamically from Strapi
        setPosts(data);
        setLatestPost(dataLastPost);
      } catch (err: any) {
        setError("Failed to load posts");
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <div className="font-sans min-h-screen pb-20">
       <HeroBlog/>
      <div className={styles.waveWrapper}>
        <svg
          className={styles.waveSvg}
          viewBox="0 0 1240 160"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M1189.9 0C1208.69 0 1218.08 0 1225.07 4.05859C1229.58 6.67676 1233.32 10.4243 1235.94 14.9316C1240 21.919 1240 31.3128 1240 50.0996V109.9C1240 128.687 1240 138.081 1235.94 145.068C1233.32 149.576 1229.58 153.323 1225.07 155.941C1218.08 160 1208.69 160 1189.9 160H886.734C870.852 160 861.944 145.732 854.402 131.754C851.623 126.603 847.397 122.377 842.246 119.598C835.578 116 826.751 116 809.1 116H430.9C413.249 116 404.422 116 397.754 119.598C392.603 122.377 388.377 126.603 385.598 131.754C378.056 145.732 369.148 160 353.266 160H50.0996C31.3128 160 21.919 160 14.9316 155.941C10.4243 153.323 6.67676 149.576 4.05859 145.068C0 138.081 0 128.687 0 109.9V50.0996C0 31.3128 0 21.919 4.05859 14.9316C6.67676 10.4243 10.4243 6.67676 14.9316 4.05859C21.919 0 31.3128 0 50.0996 0H1189.9Z"
            fill="var(--brand-900)"
          />
        </svg>
      </div>

      {/* Header */}
      <section className={styles.indexHeader}>
        <h1 className={styles.pageTitle}>
          Our <span className={styles.accent}>Blog</span>
        </h1>
        <p className={styles.lead}>
          Insights on retirement, super, and smart money moves — written the way
          we talk: clear and no fluff.
        </p>
      </section>

      {/* Posts Grid */}
      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {posts.map((p: Post) => (
            <article key={p.slug} className={styles.card}>
              <Link className={styles.cardLink} href={`/blog/${p.slug}`}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    fill 
                    className={styles.cardImage}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.badge}>{p.category}</div>
                  <h2 className={styles.cardTitle}>{p.title}</h2>
                  <p className={styles.cardExcerpt}>{p.excerpt}</p>
                  <div className={styles.cardMeta}>
                    <span>{p.author}</span>
                    <span>•</span>
                    <time dateTime={p.date}>{p.prettyDate}</time>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
