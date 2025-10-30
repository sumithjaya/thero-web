import { BsArrowRight } from "react-icons/bs";
import CtaAndFaq from "../CtaAndFaq";
import styles from "./FAQ.module.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

export default function FAQ() {
  return (
    <section className={styles.sectionPadLg}>
      <div className={styles.faqRow}>
        <div className={styles.faqIntro}>
          <h1 className={styles.faqTitle}>
            Any <span className={styles.primary}>questions? </span>
          </h1>
          <h1 className={styles.faqTitle}>We got you.</h1>
          <p className={styles.faqCopy}>
            Yet bed any for assistance indulgence unpleasing. Not thoughts all
            exercise blessing. Indulgence way everything joy alteration
            boisterous the attachment.
          </p>
          <div className={styles.moreFaqRow}>
            <p className={styles.moreFaqLink}>More FAQs</p>
            <BsArrowRight className={styles.moreFaqIcon} />
          </div>
          <div className={styles.moreFaqRowMob}>
            <p className={styles.moreFaqLink}>More FAQs</p>
            <FaAngleDown className={styles.moreFaqIcon} />
          </div>
        </div>
        <div className={styles.faqListCol}>
          <CtaAndFaq />
        </div>
      </div>
    </section>
  );
}
