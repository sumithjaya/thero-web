"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./CtaAndFaq.module.css";
import { fetchFAQs } from "./Testimonials/FAQ"; // adjust the path if needed

// Local UI type
type FAQItem = { q: string; a: string };

// (Optional) local fallback so page renders even if Strapi is down
const defaultFaqs: FAQItem[] = [
  {
    q: "How this work?",
    a: "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
  },
  {
    q: "Are there any additional fee?",
    a: "Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.",
  },
  {
    q: "How can I get the app?",
    a: "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.",
  },
  {
    q: "What features do you offer and other not?",
    a: "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.",
  },
];

function AccordionItem({
  id,
  q,
  a,
  open,
  onToggle,
}: {
  id: string;
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState<string>("0px");

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    setMaxH(open ? `${el.scrollHeight}px` : "0px");
  }, [open]);

  return (
    <li className={styles.item}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-content`}
        onClick={onToggle}
        className={styles.btn}
        suppressHydrationWarning
      >
        <span className={styles.q}>{q}</span>

        {/* plus/minus icon */}
        <svg className={styles.icon} viewBox="0 0 16 16" aria-hidden>
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`${styles.iconBar} ${styles.iconBarHorizontal}`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`${styles.iconBar} ${
              open ? styles.iconBarHidden : styles.iconBarVertical
            }`}
          />
        </svg>
      </button>

      <div
        id={`${id}-content`}
        ref={contentRef}
        className={styles.content}
        style={{ maxHeight: maxH }}
      >
        <div className={styles.contentInner}>{a}</div>
      </div>
    </li>
  );
}

export default function CtaAndFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [items, setItems] = useState<FAQItem[]>(defaultFaqs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        const data = await fetchFAQs(); // returns FAQs[]
        const mapped: FAQItem[] = (data || []).map((d) => ({
          q: d.Question ?? "Untitled",
          a: d.Answer ?? "",
        }));

        if (!cancelled) {
          setItems(mapped.length ? mapped : defaultFaqs);
        }
      } catch (err) {
        console.error("Error fetching FAQs:", err);
        if (!cancelled) setItems(defaultFaqs);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.col}>
          <div className={styles.inner}>
            {loading ? (
              <div className={styles.loading}>Loading FAQs…</div>
            ) : (
              <ul className={styles.faqList}>
                {items.map((f, i) => (
                  <AccordionItem
                    key={`faq-${i}`}
                    id={`faq-${i}`}
                    q={f.q}
                    a={f.a}
                    open={openIndex === i}
                    onToggle={() =>
                      setOpenIndex((idx) => (idx === i ? null : i))
                    }
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
