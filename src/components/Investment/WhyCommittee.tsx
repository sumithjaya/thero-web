import Image from "next/image";
import styles from "./WhyCommittee.module.css";
export default function WhyCommittee() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Why a Committee?</h2>
      <p className= {styles.description}>
        One disadvantage of Lorum Ipsum is that in Latin certain letters appear
        more frequently than others - which creates a distinct visual
        impression.
      </p>
      <div className={styles.content}>
        <div className={styles.imagewrap}>
          <Image
            src="/images/comittee.jpg"
            alt="image"
         width={600}
         height={600}
          />
        </div>
        <div>
            <h3>
                Why a Team Beats One Guru
            </h3>
            <ul>
                <li>Diverse expertise = fewer blind spots</li>
                <li>Rigorous checks = safer your money</li>
                <li>Data-driven, not emotional</li>
            </ul>
        </div>
      </div>
    </section>
  );
}
