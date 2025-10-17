// components/TeamScroller.tsx
"use client";
import Image from "next/image";

type Member = { id: number; name: string; role: string; img: string };

const members: Member[] = [
  { id: 1, name: "Ravi Patel", role: "Marketing Strategy", img: "/images/team/1.jpg" },
  { id: 2, name: "Elena Torres", role: "Data Analysis", img: "/images/team/2.jpg" },
  { id: 3, name: "Sophie Chamberlain", role: "Specialized Support", img: "/images/team/3.jpg" },
  { id: 4, name: "Marcus Elmore", role: "Customer Relations", img: "/images/team/4.jpg" },
  { id: 5, name: "Jenna Wu", role: "Product Development", img: "/images/team/5.jpg" },
  // add more as needed
];

function Card({ m }: { m: Member }) {
  return (
    <div className="card">
      <div className="imgWrap">
        {/* Use fixed sizes for smooth GPU transforms */}
        <Image src={m.img} alt={m.name} width={260} height={320} />
      </div>
      <div className="meta">
        <strong>{m.name}</strong>
        <span>{m.role}</span>
      </div>
    </div>
  );
}

export default function TeamScroller() {
  // Duplicate the items to create a seamless loop
  const loop = [...members, ...members];

  return (
    <section className="wrap">
      <h2 className="title">
        Meet The <span className="accent">Committee</span>
      </h2>

      {/* Row 1 (left → right) */}
      <div className="rail mask">
        <div className="track trackLeft">
          {loop.map((m, i) => (
            <Card key={`row1-${m.id}-${i}`} m={m} />
          ))}
        </div>
      </div>

      {/* Gap */}
      <div style={{ height: 18 }} />

      {/* Row 2 (right → left, slightly faster) */}
      <div className="rail mask">
        <div className="track trackRight">
          {loop.map((m, i) => (
            <Card key={`row2-${m.id}-${i}`} m={m} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .wrap {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 8px 16px 32px;
        }

        .title {
          text-align: center;
          font-size: 28px;
          margin: 8px 0 6px;
          font-weight: 800;
          color: #1f1f1f;
        }
        .accent { color: #0047ab; }

        .rail {
          position: relative;
          overflow: hidden; /* critical for marquee */
          width: 100%;
        }

        .mask::before,
        .mask::after {
          content: "";
          position: absolute;
          top: 0;
          width: 80px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        .mask::before {
          left: 0;
          background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0));
        }
        .mask::after {
          right: 0;
          background: linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0));
        }

        .track {
          display: flex;
          gap: 18px;
          width: max-content; /* content dictates width */
          will-change: transform;
        }

        /* Speeds: tune duration based on total content width */
        .trackLeft {
          animation: scrollLeft linear infinite;
          animation-duration: 28s;
        }
        .trackRight {
          animation: scrollRight linear infinite;
          animation-duration: 24s;
        }

        /* Pause on hover */
        .rail:hover .track {
          animation-play-state: paused;
        }

        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); } /* because we duplicated items */
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }

        .card {
          flex: 0 0 auto;
          width: 260px;            /* match image width */
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 1px 0 #ecf4fe inset;
          overflow: hidden;
          position: relative;
        }

        .imgWrap :global(img) {
          display: block;
          width: 260px;
          height: 320px;
          object-fit: cover;
          border-radius: 16px;
          background: #e6e6e6;
        }

        .meta {
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 12px;
          padding: 10px 14px;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 1px 0 #ecf4fe inset;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .meta strong { color: #1f1f1f; font-size: 14px; }
        .meta span   { color: #6b7280; font-size: 12px; }
        
        /* Responsive tweaks */
        @media (max-width: 768px) {
          .imgWrap :global(img), .card { width: 200px; }
          .imgWrap :global(img) { height: 260px; }
          .trackLeft { animation-duration: 24s; }
          .trackRight { animation-duration: 20s; }
        }
      `}</style>
    </section>
  );
}
