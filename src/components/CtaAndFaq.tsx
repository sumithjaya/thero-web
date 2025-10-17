"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
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
    <li className="border-t border-black/10">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-content`}
        onClick={onToggle}
        className="relative flex w-full items-center gap-2 py-5 text-left text-base font-semibold md:text-lg"
      >
        <span className="flex-1 text-foreground">{q}</span>
        {/* plus/minus icon */}
        <svg
          className="ml-auto h-4 w-4 flex-shrink-0"
          viewBox="0 0 16 16"
          aria-hidden
        >
          {/* Horizontal bar */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className="origin-center transition duration-200 ease-out fill-current"
          />
          {/* Vertical bar rotates away when open */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center transition duration-200 ease-out fill-current ${
              open ? "rotate-0 scale-0 opacity-0" : "rotate-90"
            }`}
          />
        </svg>
      </button>

      <div
        id={`${id}-content`}
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: maxH }}
      >
        <div className="pb-5 leading-relaxed text-foreground/80">{a}</div>
      </div>
    </li>
  );
}

export default function CtaAndFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* FAQ */}
      <section style={{ padding: "0 70px" }}>
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <div className="px-0 md:px-8 py-8 md:py-12 mx-auto flex flex-col gap-6">
              <ul className="mt-2">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
