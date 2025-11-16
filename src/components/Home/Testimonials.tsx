"use client";
import styles from "./Testimonials.module.css";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import RatingStars from "../Testimonials/RatingStars";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  fetchTestimonials,
  type Testimonial,
} from "../Testimonials/Testimonials";
import { div } from "framer-motion/client";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const len = useMemo(() => testimonials.length, [testimonials]);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        console.log("⏳ Loading testimonials...");
        setLoading(true);
        const data = await fetchTestimonials();
        console.log("✅⏳⏳⏳✅ Loaded testimonials:", data);
        if (data && data.length > 0) {
          setTestimonials(data);
        }
      } catch (error) {
        console.error("❌ Failed to load testimonials:", error);
        // Keep using fallback testimonials
      } finally {
        setLoading(false);
      }
    }

    loadTestimonials();
  }, []);

  const next = () => {
    if (len < 2) return;
    setDir("next");
    setIndex((i) => (i + 2) % len);
  };

  const prev = () => {
    if (len < 2) return;
    setDir("prev");
    console.log("pre clicked");
    setIndex((i) => (i - 2 + len) % len);
  };

  const slides = useMemo(() => {
    if (!testimonials || testimonials.length === 0) {
      // Return empty placeholders when loading
      return [null, null];
    }
    const a = testimonials[index % len];
    const b = testimonials[(index + 1) % len];
    return [a, b];
  }, [index, len, testimonials]);

  /* ---------- Motion variants (vertical slide up) ---------- */
  
  const cardVariants: Variants = {
    initial: (custom: number) => ({
      opacity: 0,
      y: dir === "next" ? 40 : -40,
      scale: 0.97,
    }),
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 0.26, 0.23, 1],
        delay: custom * 0.15,
      },
    }),
    exit: (custom: number) => ({
      opacity: 0,
      y: dir === "next" ? -40 : 40,
      scale: 0.97,
      transition: {
        duration: 0.55,
        ease: [0.22, 0.26, 0.23, 1],
        delay: custom * 0.1,
      },
    }),
  };

  /* ------------------------------------------------------------ */

  return (
    <section className={styles.sectionPadLg}>
      <div className={styles.floatElementDts}>
        <svg
          width="118"
          height="43"
          viewBox="0 0 118 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M111.95 39.7637C111.95 38.3832 113.07 37.2639 114.45 37.2637H114.926C116.306 37.2637 117.426 38.3831 117.426 39.7637C117.426 41.1443 116.306 42.2637 114.926 42.2637H114.45C113.07 42.2635 111.95 41.1441 111.95 39.7637ZM91.9766 39.7637C91.9767 38.3832 93.0961 37.2639 94.4766 37.2637H95.4277C96.8084 37.2637 97.9276 38.3831 97.9277 39.7637C97.9276 41.1443 96.8084 42.2637 95.4277 42.2637H94.4766C93.0961 42.2634 91.9767 41.1441 91.9766 39.7637ZM88.0938 21.3086C88.0939 19.928 89.2132 18.8087 90.5938 18.8086H91.0693C92.45 18.8086 93.5692 19.928 93.5693 21.3086C93.5692 22.6892 92.45 23.8086 91.0693 23.8086H90.5938C89.2132 23.8085 88.0939 22.6892 88.0938 21.3086ZM72.0029 39.7637C72.0031 38.3833 73.1225 37.264 74.5029 37.2637H75.4541C76.8347 37.2637 77.954 38.3831 77.9541 39.7637C77.954 41.1443 76.8347 42.2637 75.4541 42.2637H74.5029C73.1225 42.2634 72.0031 41.1441 72.0029 39.7637ZM69.3389 2.5C69.339 1.11953 70.4584 0.00019455 71.8389 0H72.3145C73.6951 0 74.8143 1.1194 74.8145 2.5C74.8143 3.8806 73.6951 5 72.3145 5H71.8389C70.4584 4.99981 69.339 3.88048 69.3389 2.5ZM68.1201 21.3086C68.1203 19.9281 69.2396 18.8087 70.6201 18.8086H71.5713C72.9519 18.8086 74.0712 19.928 74.0713 21.3086C74.0712 22.6892 72.9519 23.8086 71.5713 23.8086H70.6201C69.2396 23.8085 68.1203 22.6891 68.1201 21.3086ZM52.0293 39.7637C52.0294 38.3833 53.149 37.264 54.5293 37.2637H55.4805C56.8611 37.2637 57.9803 38.3831 57.9805 39.7637C57.9803 41.1443 56.8611 42.2637 55.4805 42.2637H54.5293C53.149 42.2633 52.0294 41.1441 52.0293 39.7637ZM49.3652 2.5C49.3654 1.11956 50.4848 0.000244141 51.8652 0H52.8164C54.197 0 55.3163 1.1194 55.3164 2.5C55.3163 3.8806 54.197 5 52.8164 5H51.8652C50.4848 4.99976 49.3654 3.88045 49.3652 2.5ZM48.1465 21.3086C48.1466 19.9281 49.266 18.8088 50.6465 18.8086H51.5977C52.9783 18.8086 54.0975 19.928 54.0977 21.3086C54.0975 22.6892 52.9783 23.8086 51.5977 23.8086H50.6465C49.266 23.8084 48.1466 22.6891 48.1465 21.3086ZM32.0557 39.7637C32.0558 38.3833 33.1754 37.2641 34.5557 37.2637H35.5068C36.8875 37.2637 38.0067 38.3831 38.0068 39.7637C38.0067 41.1443 36.8875 42.2637 35.5068 42.2637H34.5557C33.1754 42.2633 32.0558 41.144 32.0557 39.7637ZM29.3916 2.5C29.3917 1.11958 30.5112 0.000293732 31.8916 0H32.8428C34.2234 0 35.3426 1.1194 35.3428 2.5C35.3426 3.8806 34.2234 5 32.8428 5H31.8916C30.5112 4.99971 29.3917 3.88042 29.3916 2.5ZM28.1729 21.3086C28.173 19.9281 29.2924 18.8088 30.6729 18.8086H31.624C33.0047 18.8086 34.1239 19.928 34.124 21.3086C34.1239 22.6892 33.0047 23.8086 31.624 23.8086H30.6729C29.2924 23.8084 28.173 22.6891 28.1729 21.3086ZM12.082 39.7637C12.0822 38.3833 13.2018 37.2641 14.582 37.2637H15.5332C16.9138 37.2637 18.0331 38.3831 18.0332 39.7637C18.0331 41.1443 16.9138 42.2637 15.5332 42.2637H14.582C13.2018 42.2632 12.0822 41.144 12.082 39.7637ZM9.41797 2.5C9.41811 1.11961 10.5376 0.000339508 11.918 0H12.8691C14.2498 0 15.369 1.1194 15.3691 2.5C15.369 3.8806 14.2498 5 12.8691 5H11.918C10.5376 4.99966 9.41811 3.88039 9.41797 2.5ZM8.19922 21.3086C8.19936 19.9282 9.31881 18.8089 10.6992 18.8086H11.6504C13.031 18.8086 14.1503 19.928 14.1504 21.3086C14.1503 22.6892 13.031 23.8086 11.6504 23.8086H10.6992C9.31881 23.8083 8.19936 22.689 8.19922 21.3086ZM-7.89062 39.7637C-7.89049 38.3832 -6.7711 37.2639 -5.39062 37.2637L-4.43945 37.2637C-3.05904 37.2639 -1.93959 38.3832 -1.93945 39.7637C-1.93959 41.1441 -3.05904 42.2634 -4.43945 42.2637H-5.39062C-6.7711 42.2635 -7.89049 41.1442 -7.89062 39.7637ZM-10.5557 2.5C-10.5555 1.11964 -9.43596 0.000392914 -8.05566 0H-7.10449C-5.72386 0 -4.60463 1.1194 -4.60449 2.5C-4.60463 3.8806 -5.72386 5 -7.10449 5H-8.05566C-9.43596 4.99961 -10.5555 3.88036 -10.5557 2.5ZM-11.7744 21.3086C-11.7743 19.9282 -10.6548 18.8089 -9.27441 18.8086H-8.32324C-6.94262 18.8086 -5.82338 19.928 -5.82324 21.3086C-5.82338 22.6892 -6.94262 23.8086 -8.32324 23.8086H-9.27441C-10.6548 23.8083 -11.7743 22.689 -11.7744 21.3086ZM-27.3887 39.7637C-27.3885 38.3832 -26.2691 37.2639 -24.8887 37.2637H-24.4131C-23.0326 37.2639 -21.9132 38.3832 -21.9131 39.7637C-21.9132 41.1441 -23.0326 42.2635 -24.4131 42.2637H-24.8887C-26.2691 42.2635 -27.3885 41.1442 -27.3887 39.7637ZM-30.5293 2.5C-30.5292 1.11968 -29.4095 0.000442505 -28.0293 0H-27.0781C-25.6975 0 -24.5783 1.1194 -24.5781 2.5C-24.5783 3.8806 -25.6975 5 -27.0781 5H-28.0293C-29.4095 4.99956 -30.5292 3.88033 -30.5293 2.5ZM-31.7471 21.3086C-31.7469 19.928 -30.6277 18.8086 -29.2471 18.8086H-28.2959C-26.9155 18.8088 -25.796 19.9282 -25.7959 21.3086C-25.796 22.689 -26.9155 23.8083 -28.2959 23.8086H-29.2471C-30.6277 23.8085 -31.7469 22.6892 -31.7471 21.3086ZM-50.502 2.5C-50.5018 1.11951 -49.3824 0.000183105 -48.002 0H-47.0508C-45.6704 0.000247955 -44.5509 1.11956 -44.5508 2.5C-44.5509 3.88044 -45.6704 4.99975 -47.0508 5H-48.002C-49.3824 4.99982 -50.5018 3.88049 -50.502 2.5ZM-51.2451 21.3086C-51.245 19.928 -50.1257 18.8086 -48.7451 18.8086H-48.2695C-46.8891 18.8088 -45.7697 19.9281 -45.7695 21.3086C-45.7697 22.6891 -46.8891 23.8084 -48.2695 23.8086H-48.7451C-50.1257 23.8085 -51.245 22.6892 -51.2451 21.3086ZM-70 2.5C-69.9999 1.11951 -68.8805 0.000183105 -67.5 0H-67.0244C-65.644 0.000198364 -64.5245 1.11953 -64.5244 2.5C-64.5245 3.88047 -65.644 4.9998 -67.0244 5H-67.5C-68.8805 4.99982 -69.9999 3.88049 -70 2.5Z"
            fill="#0047AB"
          />
        </svg>
      </div>
      <div className={styles.testimonialRow}>
        <div className={styles.testimonialLeft}>
          <div className={styles.testimonialQuote}>
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
          <div className={styles.slidesWrap}>
            <AnimatePresence mode="wait" initial={false}>
              {loading || !(slides && slides.length > 0) ? (
                // SINGLE GLOBAL SKELETON CARD
                <motion.div
                  key="skeleton-global"
                  className={`${styles.testimonialCard} ${styles.testimonialCardOffset}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={styles.avatarPad}>
                    <div className="relative" style={{ height: 80, width: 80 }}>
                      <SkeletonTheme
                        baseColor="#c4c4c4ff"
                        highlightColor="#adaeb8ff"
                      >
                        <Skeleton height={75} width={75} circle />
                      </SkeletonTheme>
                    </div>
                  </div>

                  <div className={styles.testimonialContentPad}>
                    <div style={{ width: "100%", padding: 10 }}>
                      <SkeletonTheme
                        baseColor="#c4c4c4ff"
                        highlightColor="#adaeb8ff"
                      >
                        <Skeleton width="100%" height={22} />
                        <div style={{ height: 8 }} />
                        <Skeleton width="70%" height={22} />
                      </SkeletonTheme>
                    </div>

                    <div style={{ marginTop: 12 }}>
                      <Skeleton width={120} height={16} />
                    </div>

                    <div className={styles.userRow} style={{ marginTop: 12 }}>
                      <Skeleton width={110} height={14} />
                    </div>
                  </div>
                </motion.div>
              ) : (
                // REAL CARDS — animate each card individually
                slides.map((t, idx) => {
                  const hasAvatar = Boolean(t?.Avatar);
                  return (
                    <motion.div
                      key={`${t?.slug || 'testimonial'}-${index}-${idx}`}
                      className={`${styles.testimonialCard} ${styles.testimonialCardOffset}`}
                      variants={cardVariants}
                      custom={idx}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <div className={styles.avatarPad}>
                        <div
                          className="relative"
                          style={{ height: 80, width: 80 }}
                        >
                          <Image
                            src={
                              hasAvatar && t
                                ? t.Avatar
                                : "/images/svg/avatar.svg"
                            }
                            alt={`${t?.ClientName || "Client"} photo`}
                            fill
                            className="rounded-full object-cover object-center"
                          />
                        </div>
                      </div>

                      <div className={styles.testimonialContentPad}>
                        {t?.Testimonial ? (
                          <p className={styles.testimonialCopy}>
                            {t.Testimonial}
                          </p>
                        ) : null}

                        <RatingStars
                          value={t?.rating || 5}
                          colorClass="text-amber-400"
                        />

                        <div className={styles.userRow}>
                          {/* svg omitted for brevity */}
                          <p className={styles.userName}>{t?.ClientName}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </div>

          <div className={styles.cardsBacker}>
            <div className={styles.cardsBackerInner}></div>
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