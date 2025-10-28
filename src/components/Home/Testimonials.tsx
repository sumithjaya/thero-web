"use client";
import styles from "./Testimonials.module.css";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import RatingStars from "../Testimonials/RatingStars";
import { useEffect, useMemo, useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Robert Smith",
    photo: "/images/client1.jpg",
    text: "Very helpful in urgent situation, love the product and best service.",
    rating: 4.6,
  },
  {
    id: 2,
    name: "Sarah K.",
    photo: "/images/client2.jpg",
    text: "Love the interface and really easy to use so far. Great service!",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Adeel R.",
    photo: "/images/client3.jpg",
    text: "We onboarded our team in a day. Support is lightning fast.",
    rating: 5,
  },
  {
    id: 4,
    name: "Maya D.",
    photo: "/images/client4.jpg",
    text: "Clean UI, thoughtful features, and stable. Exactly what we needed.",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Kenan P.",
    photo: "/images/client5.jpg",
    text: "Migration was painless and our NPS jumped. Highly recommended.",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Elena V.",
    photo: "/images/client6.jpg",
    text: "Solid product. Clear roadmap and they actually ship updates.",
    rating: 4.7,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const len = TESTIMONIALS.length;

  // advance by 2, wrap around
  const next = () => setIndex((i) => (i + 2) % len);
  const prev = () => setIndex((i) => (i - 2 + len) % len);

  // compute the two visible slides
  const slides = useMemo(() => {
    const a = TESTIMONIALS[index % len];
    const b = TESTIMONIALS[(index + 1) % len];
    return [a, b];
  }, [index, len]);

  // simple fade trigger
  const [fadeKey, setFadeKey] = useState(0);
  useEffect(() => setFadeKey((k) => k + 1), [index]);

  return (
    <section className={styles.sectionPadLg}>
      <div className={styles.testimonialRow}>
        <div className={styles.testimonialLeft}>
          <div>
            <svg
              width="65"
              height="52"
              viewBox="0 0 65 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.581 10.2144H25.7915V0H24.581C18.0636 0.00896991 11.8158 2.60229 7.2078 7.21122C2.59977 11.8201 0.00768621 18.0685 0 24.5858V51.4837H28.106V23.3753H10.258C10.5663 19.7875 12.2083 16.4457 14.8599 14.0092C17.5114 11.5728 20.98 10.2188 24.581 10.2144ZM25.685 25.7988V49.0651H2.42106V24.5858C2.4277 18.919 4.60203 13.4693 8.49822 9.35437C12.3944 5.23939 17.7172 2.77087 23.3753 2.45495V7.82727C19.1437 8.13763 15.1858 10.0363 12.2955 13.1426C9.40516 16.2489 7.79609 20.3331 7.79096 24.5761V25.7867L25.685 25.7988Z"
                fill="#D1DAE8"
              />
              <path
                d="M46.5592 23.3753C46.867 19.7871 48.5087 16.4446 51.1603 14.0077C53.812 11.5707 57.2808 10.2164 60.8822 10.212H62.0927V0H60.8822C54.3638 0.00704935 48.1144 2.5996 43.5052 7.2088C38.896 11.818 36.3034 18.0674 36.2964 24.5858V51.4837H64.4V23.3753H46.5592ZM61.9789 49.0651H38.7126V24.5858C38.7192 18.9194 40.8932 13.4701 44.7889 9.35516C48.6846 5.24025 54.0068 2.77147 59.6644 2.45495V7.82727C55.4328 8.13763 51.4749 10.0363 48.5846 13.1426C45.6943 16.2489 44.0852 20.3331 44.0801 24.5761V25.7867H61.9789V49.0651Z"
                fill="#D1DAE8"
              />
            </svg>
          </div>
          <h4 className={styles.testimonialTitle}>
            What they say, from our{" "}
            <span className={styles.primary}>clients</span>
          </h4>
          <p className={styles.testimonialSubcopy}>
            Our customers says about serving quality and other.
          </p>

          <div className={styles.arrowGroup}>
            <button
              className={`${styles.arrowBtn} ${styles.arrowBtnLight}`}
              onClick={prev}
              aria-label="Previous testimonials"
            >
              <BsArrowLeft />
            </button>
            <button
              className={`${styles.arrowBtn} ${styles.arrowBtnDark}`}
              onClick={next}
              aria-label="Next testimonials"
            >
              <BsArrowRight />
            </button>
          </div>
        </div>

        <div className={styles.testimonialCardsCol}>
          {/* visible slides */}
          <div key={fadeKey} className={styles.slidesWrap}>
            {slides.map((t) => (
              <div
                key={t.id}
                className={`${styles.testimonialCard} ${styles.testimonialCardOffset}`}
              >
                <div>
                  <div className={styles.avatarPad}>
                    <div
                      className="relative"
                      style={{ height: "80px", width: "80px" }}
                    >
                      <Image
                        src={t.photo}
                        alt={`${t.name} photo`}
                        fill
                        className="rounded-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.testimonialContentPad}>
                  <p className={styles.testimonialCopy}>{t.text}</p>
                  <RatingStars value={t.rating} colorClass="text-amber-400" />
                  <div className={styles.userRow}>
                    <svg
                      width="24px"
                      height="64px"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <path
                        d="M2 8a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1z"
                        fill="#bdbfc0ff"
                      ></path>
                    </svg>
                    <p className={styles.userName}>{t.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* background rectangle behind the cards */}
          <div className={styles.cardsBacker}>
            <svg
              width="532"
              height="540"
              viewBox="0 0 532 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="532" height="540" rx="20" fill="#ECF4FE" />
            </svg>
          </div>
        </div>
        <div className={styles.arrowGroupMobile}>
            <button
              className={`${styles.arrowBtn} ${styles.arrowBtnLight}`}
              onClick={prev}
              aria-label="Previous testimonials"
            >
              <BsArrowLeft />
            </button>
            <button
              className={`${styles.arrowBtn} ${styles.arrowBtnDark}`}
              onClick={next}
              aria-label="Next testimonials"
            >
              <BsArrowRight />
            </button>
          </div>
      </div>
    </section>
  );
}
