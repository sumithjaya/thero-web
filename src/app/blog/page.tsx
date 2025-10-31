"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Blog.module.css";
import type { Post } from "./posts";
import { fetchLatestPost, fetchPosts } from "./posts";
import { useEffect, useState } from "react";
import HeroBlog from "@/components/hero/HeroBlog";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function SkeletonCard() {
  return (
    <div className={styles.skeletoncard}>
      <div>
        <SkeletonTheme baseColor="#c4c4c4ff" highlightColor="#adaeb8ff">
          <Skeleton height={300} width={"100%"} />
          <div style={{ marginTop: 12 }}>
            <Skeleton height={35} />
          </div>
          <div style={{ marginTop: 8 }}>
            <Skeleton height={35} width={300} />
          </div>
          <div style={{ marginTop: 8 }}>
            <Skeleton count={3} />
          </div>
          <div style={{ marginTop: 8 }}>
            <Skeleton />
          </div>
          <div className={styles.grid} style={{ marginTop: 8 }}>
            <Skeleton width={70} /> <Skeleton width={40} />
          </div>
          <div style={{ marginTop: 8 }}>
            <Skeleton width={100} />
          </div>
        </SkeletonTheme>
      </div>
    </div>
  );
}
export default function BlogIndexPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [latestPost, setLatestPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function loadPosts() {
      try {
        const dataLastPost = await fetchLatestPost();
        const data = await fetchPosts();
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

 // if (true) {
     if (loading) {
    return (
      <div className={styles.container}>
        <HeroBlog />
        <div className={styles.waveWrapper}>
          <svg
            className={styles.waveSvg}
            height="160"
            viewBox="0 0 1240 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M1189.9 0C1208.69 1.50182e-10 1218.08 2.14568e-05 1225.07 4.05859C1229.58 6.67676 1233.32 10.4243 1235.94 14.9316C1240 21.919 1240 31.3128 1240 50.0996V109.9C1240 128.687 1240 138.081 1235.94 145.068C1233.32 149.576 1229.58 153.323 1225.07 155.941C1218.08 160 1208.69 160 1189.9 160H886.734C870.852 160 861.944 145.732 854.402 131.754C851.623 126.603 847.397 122.377 842.246 119.598C835.578 116 826.751 116 809.1 116H430.9C413.249 116 404.422 116 397.754 119.598C392.603 122.377 388.377 126.603 385.598 131.754C378.056 145.732 369.148 160 353.266 160H50.0996C31.3128 160 21.919 160 14.9316 155.941C10.4243 153.323 6.67676 149.576 4.05859 145.068C2.50622e-05 138.081 1.97247e-10 128.687 0 109.9V50.0996C1.97247e-10 31.3128 2.50622e-05 21.919 4.05859 14.9316C6.67676 10.4243 10.4243 6.67676 14.9316 4.05859C21.919 2.51158e-05 31.3128 1.97996e-10 50.0996 0H1189.9Z"
              fill="#002855"
            />
          </svg>
        </div>
        <div className={styles.skeletongrid}>
          {" "}
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
        <div className={styles.skeletongrid2}>
          <div className={styles.skeletoncardFeature}>
            <div>
              <SkeletonTheme baseColor="#c4c4c4ff" highlightColor="#adaeb8ff">
                <Skeleton /> <Skeleton />
                <Skeleton /> <Skeleton width={100} />
              </SkeletonTheme>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <div className={styles.container}>
      <HeroBlog />
      <div className={styles.waveWrapper}>
        <svg
          className={styles.waveSvg}
          height="160"
          viewBox="0 0 1240 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M1189.9 0C1208.69 1.50182e-10 1218.08 2.14568e-05 1225.07 4.05859C1229.58 6.67676 1233.32 10.4243 1235.94 14.9316C1240 21.919 1240 31.3128 1240 50.0996V109.9C1240 128.687 1240 138.081 1235.94 145.068C1233.32 149.576 1229.58 153.323 1225.07 155.941C1218.08 160 1208.69 160 1189.9 160H886.734C870.852 160 861.944 145.732 854.402 131.754C851.623 126.603 847.397 122.377 842.246 119.598C835.578 116 826.751 116 809.1 116H430.9C413.249 116 404.422 116 397.754 119.598C392.603 122.377 388.377 126.603 385.598 131.754C378.056 145.732 369.148 160 353.266 160H50.0996C31.3128 160 21.919 160 14.9316 155.941C10.4243 153.323 6.67676 149.576 4.05859 145.068C2.50622e-05 138.081 1.97247e-10 128.687 0 109.9V50.0996C1.97247e-10 31.3128 2.50622e-05 21.919 4.05859 14.9316C6.67676 10.4243 10.4243 6.67676 14.9316 4.05859C21.919 2.51158e-05 31.3128 1.97996e-10 50.0996 0H1189.9Z"
            fill="#002855"
          />
        </svg>
      </div>

      {/* Posts Grid */}
      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {posts.map((p: Post) => {
            console.log("post-", p);
            return (
              <article key={p.slug} className={styles.card}>
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
                  <h2 className={styles.cardTitle}>x{p.title}</h2>
                  <p className={styles.cardExcerpt}>xx{p.excerpt}</p>
                  {/* <div className={styles.cardMeta}>
                    <span>{p.author}</span>
                    <span>•</span>
                    <time dateTime={p.date}>{p.prettyDate}</time>
                  </div> */}

                  {/*                   
                  {Array.isArray((p as any).tags) &&
                  (p as any).tags.length > 0 ? (
                    <div className={styles.tags}>
                      {(p as any).tags.map((t: any, i: number) => {
                        const title =
                          typeof t === "string" ? t : t.Title || t.title || "";
                        const slug =
                          typeof t === "string"
                            ? t
                                .toLowerCase()
                                .trim()
                                .replace(/[^a-z0-9]+/g, "-")
                                .replace(/(^-|-$)/g, "")
                            : t.Slug ||
                              t.slug ||
                              (title || "")
                                .toLowerCase()
                                .trim()
                                .replace(/[^a-z0-9]+/g, "-")
                                .replace(/(^-|-$)/g, "");
                        if (!title) return null;
                        return (
                          <Link
                            key={`${p.slug}-tag-${i}-${slug}`}
                            href={`/tags/${encodeURIComponent(slug)}`}
                            className={styles.tag}
                            aria-label={`Filter by ${title}`}
                          >
                            {title}
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <div className={styles.tags}>
                      <span className={styles.tagEmpty}>No tags</span>
                    </div>
                  )} */}

                  <Link className={styles.cardLink} href={`/blog/${p.slug}`}>
                    Read More
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Featured section (unchanged structure) */}
      <section className={styles.featuredPost}>
        <div className={styles.featuredPostBody}>
          <div className={styles.featuredPostbadge}>
            {latestPost?.title}
          </div>
          <div className={styles.featuredPostcardExcerpt}>
            {latestPost?.excerpt}
          </div>
          <Link className={styles.featuredPostcardLink} href={`/blog/${latestPost?.slug}`}>
            Read More
          </Link>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {posts.map((p: Post) => {
            console.log("post-", p);
            return (
              <article key={p.slug} className={styles.card}>
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
                  <h2 className={styles.cardTitle}>x{p.title}</h2>
                  <p className={styles.cardExcerpt}>xx{p.excerpt}</p>
                  {/* <div className={styles.cardMeta}>
                    <span>{p.author}</span>
                    <span>•</span>
                    <time dateTime={p.date}>{p.prettyDate}</time>
                  </div> */}

                  {/*                   
                  {Array.isArray((p as any).tags) &&
                  (p as any).tags.length > 0 ? (
                    <div className={styles.tags}>
                      {(p as any).tags.map((t: any, i: number) => {
                        const title =
                          typeof t === "string" ? t : t.Title || t.title || "";
                        const slug =
                          typeof t === "string"
                            ? t
                                .toLowerCase()
                                .trim()
                                .replace(/[^a-z0-9]+/g, "-")
                                .replace(/(^-|-$)/g, "")
                            : t.Slug ||
                              t.slug ||
                              (title || "")
                                .toLowerCase()
                                .trim()
                                .replace(/[^a-z0-9]+/g, "-")
                                .replace(/(^-|-$)/g, "");
                        if (!title) return null;
                        return (
                          <Link
                            key={`${p.slug}-tag-${i}-${slug}`}
                            href={`/tags/${encodeURIComponent(slug)}`}
                            className={styles.tag}
                            aria-label={`Filter by ${title}`}
                          >
                            {title}
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <div className={styles.tags}>
                      <span className={styles.tagEmpty}>No tags</span>
                    </div>
                  )} */}

                  <Link className={styles.cardLink} href={`/blog/${p.slug}`}>
                    Read More
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
