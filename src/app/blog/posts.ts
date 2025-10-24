export type Post = {
slug: string;
title: string;
excerpt: string;
author: string;
date: string;
prettyDate: string;
category: string;
image: string;
content: { p?: string; h2?: string; ul?: string[] }[];
};


const posts: Post[] = [
{
slug: "retirement-checklist-2025",
title: "Your 2025 Retirement Readiness Checklist",
excerpt: "A practical, 7-step list to pressure-test your plan in 30 minutes.",
author: "Alice Johnson",
date: "2025-10-20",
prettyDate: "Oct 20, 2025",
category: "Planning",
image: "/images/blog/retirement-checklist.jpg",
content: [
{ p: "This is the blunt, no-BS checklist we use with clients before year-end." },
{ h2: "1) Cash buffer", p: "Target 6–12 months of essential expenses in a high-interest account." },
{ h2: "2) Contributions", ul: ["Max employer match", "Consider salary sacrifice", "Avoid end-of-year scramble"] },
{ h2: "3) Insurance sanity check", p: "If one thing goes wrong, your plan shouldn’t implode." }
],
},
{
slug: "super-fees-explained",
title: "Super Fees: What Actually Matters",
excerpt: "Cut the noise. Here’s how to compare funds without getting lost in PDFs.",
author: "Bob Smith",
date: "2025-09-12",
prettyDate: "Sep 12, 2025",
category: "Super",
image: "/images/blog/super-fees.jpg",
content: [
{ p: "Fees compound too — just like returns. Tiny percentages matter over decades." },
{ h2: "The signal", ul: ["Administration fee", "Investment fee", "Performance fees (when they exist)"] },
{ h2: "The noise", p: "Marketing names, seasonal offers, shiny apps. Look at the PDS and compare apples to apples." }
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
image: "/images/blog/sequence-risk.jpg",
content: [
{ p: "Two portfolios with the same average return can produce wildly different outcomes if the bad years hit early." },
{ h2: "Mitigations", ul: ["Dynamic withdrawal rules", "Cash bucket for 2–3 years", "Rebalance discipline"] }
],
}
];


export default posts;