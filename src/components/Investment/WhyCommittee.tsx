import Image from "next/image";
import styles from "./WhyCommittee.module.css";
export default function WhyCommittee() {
  return (
    
    <section className={styles.philosophySection}>
      <h2 className={styles.title}>Why a <span className={styles.accent}>Committee?</span></h2>
      <p className= {styles.description}>
        One disadvantage of Lorum Ipsum is that in Latin certain letters appear
        more frequently than others - which creates a distinct visual
        impression.
      </p>
        <div className={styles.philosophyGrid}>
          <div className={styles.philosophyImgCol}>
            <Image
              src="/images/think.jpg"
              alt="hero"
              width={600}
              height={270}
              className={styles.philosophyImg}
            />
          </div>
          <div className={styles.philosophyTextCol}>
            <h4 className={styles.h44}>
           Why a Team Beats One Guru 
            </h4>
            <ul className={styles.philosophyList}>
                <li>Diverse expertise = fewer blind spots</li>
                <li>Rigorous checks = safer your money</li>
                <li>Data-driven, not emotional</li>
            </ul>
          </div>
        </div>
      </section>
  );
}
