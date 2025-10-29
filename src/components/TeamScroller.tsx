// components/TeamScroller.tsx
"use client";
import Image from "next/image";
import Styles from './TeamScroller.module.css'
import { style } from "framer-motion/client";
type Member = { id: number; name: string; role: string; img: string };

const members: Member[] = [
  { id: 1, name: "Ravi Patel", role: "Marketing Strategy", img: "/images/team/1.jpg" },
  { id: 2, name: "Elena Torres", role: "Data Analysis", img: "/images/team/2.jpg" },
  { id: 3, name: "Sophie Chamberlain", role: "Specialized Support", img: "/images/team/3.jpg" },
  { id: 4, name: "Marcus Elmore", role: "Customer Relations", img: "/images/team/4.jpg" },
  { id: 5, name: "Jenna Wu", role: "Product Development", img: "/images/team/5.jpg" }, { id: 1, name: "Ravi Patel", role: "Marketing Strategy", img: "/images/team/1.jpg" },
  { id: 2, name: "Elena Torres", role: "Data Analysis", img: "/images/team/2.jpg" },
  { id: 3, name: "Sophie Chamberlain", role: "Specialized Support", img: "/images/team/3.jpg" },
  { id: 4, name: "Marcus Elmore", role: "Customer Relations", img: "/images/team/4.jpg" },
  { id: 5, name: "Jenna Wu", role: "Product Development", img: "/images/team/5.jpg" }, { id: 1, name: "Ravi Patel", role: "Marketing Strategy", img: "/images/team/1.jpg" },
  { id: 2, name: "Elena Torres", role: "Data Analysis", img: "/images/team/2.jpg" },
  { id: 3, name: "Sophie Chamberlain", role: "Specialized Support", img: "/images/team/3.jpg" },
  { id: 4, name: "Marcus Elmore", role: "Customer Relations", img: "/images/team/4.jpg" },
  { id: 5, name: "Jenna Wu", role: "Product Development", img: "/images/team/5.jpg" }, { id: 1, name: "Ravi Patel", role: "Marketing Strategy", img: "/images/team/1.jpg" },
  { id: 2, name: "Elena Torres", role: "Data Analysis", img: "/images/team/2.jpg" },
  { id: 3, name: "Sophie Chamberlain", role: "Specialized Support", img: "/images/team/3.jpg" },
  { id: 4, name: "Marcus Elmore", role: "Customer Relations", img: "/images/team/4.jpg" },
  { id: 5, name: "Jenna Wu", role: "Product Development", img: "/images/team/5.jpg" }, { id: 1, name: "Ravi Patel", role: "Marketing Strategy", img: "/images/team/1.jpg" },
  { id: 2, name: "Elena Torres", role: "Data Analysis", img: "/images/team/2.jpg" },
  { id: 3, name: "Sophie Chamberlain", role: "Specialized Support", img: "/images/team/3.jpg" },
  { id: 4, name: "Marcus Elmore", role: "Customer Relations", img: "/images/team/4.jpg" },
  { id: 5, name: "Jenna Wu", role: "Product Development", img: "/images/team/5.jpg" },
  // add more as needed
];

function Card({ m }: { m: Member }) {
  return (
    <div className={Styles.card}>
      <div className={Styles.imgWrap}>
        <Image src={m.img} alt={m.name} width={260} height={320} />
      </div>
      <div className={Styles.meta}>
        <strong>{m.name}</strong>
        <span>{m.role}</span>
      </div>
    </div>
  );
}

export default function TeamScroller() {
  // Duplicate to enable seamless wraparound
  const loop = [...members, ...members];

  return (
    <section className={Styles.wrap} aria-label="Team scroller">
   <div className={Styles.TitleContainer}>
       <h2 className={Styles.title}>
        Meet The <span className={Styles.accent}>Committee</span>

      </h2>
    <p className={Styles.susbTitle}>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression.</p>
     
     </div> {/* Single line rail */}
      <div className={Styles.rail}>
        <div className={Styles.track}>
          {loop.map((m, i) => (
            <Card key={`row-${m.id}-${i}`} m={m} />
          ))}
        </div>
      </div>

       
    </section>
  );
}
