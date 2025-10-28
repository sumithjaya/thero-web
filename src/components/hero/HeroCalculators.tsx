import Link from "next/link";
import styles from "./HeroCalculators.module.css";
import Image from "next/image";

export default function HeroCalculators() {
  return (
    <div className={styles.container}>
      <section className={styles.section} aria-labelledby="hero-heading">
        <div className={styles.innerWrapper}>
          <div className={styles.headerGroup}>
            <h1 className={styles.heading}>
              <span className={styles.headingPrimary}>Retirement</span> Planning
            </h1>
            <p className={styles.description}>
              Let’s get it sorted for you...meet with one of our Retirement
              Experts. Via chat, video or face to face.
            </p>
            <Link href="/get-started" className={styles.ctaButton}>
              Get Started
            </Link>
          </div>
        </div>
        <div className={styles.mob_FlloatStars}>
          <Image
            src="/images/svg/stars.svg"
            alt="image"
            width={120}
            height={200}
          />
        </div>
        <div className={styles.floatDots}>
          <Image
            src="/images/svg/dots.svg" 
            alt="image"
            width={120}
            height={200}
          />
        </div>
      </section>
    </div>
  );
}
