import Image from "next/image";
import styles from "./JournalPlan.module.css";
export default function JournalPlan() {
  return (
    <section className={`${styles.sectionPadLg} ${styles.journalRow}`}>
      <div className={styles.journalTextCol}>
        <h4 className={styles.journalTitleDark}>Create your </h4>
        <h4 className={styles.journalTitlePrimary}>Retirement Journal</h4>
        <h4 className={styles.journalTitlePrimary}>& Financial Plan</h4>
        <p className={styles.journalParagraph}>
          Easily generate your personalized retirement journal with step-by-step
          guidance. Explore financial plans, track goals, and visualize your
          retirement journey.
        </p>
      </div>
      <div className={styles.journalArtCol}>
        <div className={styles.journalArtBox}>
          <div className={styles.journalMainImage}>
            <Image
              src="/images/logo.png"
              alt="image"
              width={120}
              height={200}
            />
          </div>
          <div className={styles.journalBubbleOne}>
            <Image
              src="/images/image-round01.jpg"
              alt="image"
              width={154}
              height={154}
              className={styles.fullRound}
            />
          </div>
          <div className={styles.journalBubbleTwo}>
            <Image
              src="/images/image-round02.jpg"
              alt="image"
              width={110}
              height={110}
              className={styles.fullRound}
            />
          </div>
          <div className={styles.journalBubbleThree}>
            <Image
              src="/images/image-round03.jpg"
              alt="image"
              width={120}
              height={200}
              className={styles.fullRoundSm}
            />
          </div>
          <div className={styles.journalBubbleFour}>
            <Image
              src="/images/image-round04.jpg"
              alt="image"
              width={120}
              height={200}
              className={styles.fullRoundXs}
            />
          </div>
          <div className={styles.journalBubbleFive}>
            <Image
              src="/images/image-round05.jpg"
              alt="image"
              width={120}
              height={200}
              className={styles.fullRoundTiny}
            />
          </div>
       
        </div>
      </div>
    </section>
  );
}
