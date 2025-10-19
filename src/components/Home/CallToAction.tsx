import Link from "next/link";
import styles from "./CallToAction.module.css";
export default function CallToAction( ) {
    return (
      <section className={styles.sectionPadLg}>
        <div className={styles.ctaBar}>
          <div className={styles.ctaBarTextCol}>
            <h1 className={styles.ctaTitle}>Will I have enough money?</h1>
            <p className={styles.ctaSubtitle}>Find out if your income will be sufficient in the years ahead.</p>
          </div>
          <div>
            <Link href="/page" className={styles.ctaPrimary}>
              Get Started
            </Link>
          </div>
        </div>
      </section>
    );
}