import Image from "next/image";
import styles from "./Banner.module.css";

export default function Banner () {
  return (
    <div className={styles.bannerWrap}>
      <div className={styles.banner}>
        <div className={styles.bannerImgWrap}>
          <Image
            src="/images/oldlady.jpg"
            alt="thero"
            width={300}
            height={300}
            className={styles.bannerImg}
            priority
          />
        </div>
        <div className={styles.bannerText}>
          <h1 className={styles.bannerTitle}>
            Do I qualify for the aged pension?
          </h1>
          <p className={styles.bannerSubtitle}>
            Yes, you’ll qualify for a part pension.
          </p>
        </div>
      </div>
    </div>
  );
}
