import type { Metadata } from "next";
}


export default function BlogPostPage({ params }: { params: { slug: string } }) {
const p = postsData.find((x) => x.slug === params.slug);
if (!p) return <div className="p-8">Post not found.</div>;


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
<Image src={p.image} alt={p.title} fill className={styles2.featureImage} />
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


<div className={styles2.ctaBar}>
<div>
<h3 className={styles2.ctaTitle}>Will I have enough money?</h3>
<p className={styles2.ctaSubtitle}>Find out if your income will be sufficient in the years ahead.</p>
</div>
<Link href="/calculators" className={styles2.ctaButton}>Run the calculator</Link>
</div>
</main>
</div>
);
}