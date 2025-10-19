import { BiMailSend, BiPhone } from "react-icons/bi";
import styles from "./ContactForm.module.css";
import { BsGeoAlt, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
export default function ContactForm( ) {
    return (
       <section className={styles.sectionPadLg}>
        <div className={styles.contactRow}>
          <div className={styles.contactFormCol}>
            <ContactForm />
          </div>
          <div className={styles.contactInfoCol}>
            <h5 className={styles.contactTitle}>Contact Us</h5>
            <p className={styles.contactIntro}>
              There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.
            </p>

            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <div className={styles.contactIconBox}>
                  <BiPhone className={styles.contactIcon} />
                </div>
                <div className={styles.contactDetails}>
                  <p className={styles.contactLabel}>Phone</p>
                  <p className={styles.contactValue}>(+081) 9876 1234</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIconBox}>
                  <BiMailSend className={styles.contactIcon} />
                </div>
                <div className={styles.contactDetails}>
                  <p className={styles.contactLabel}>Email</p>
                  <p className={styles.contactValue}>johndoe@gmail.com</p>
                </div>
              </div>
            </div>

            <div className={styles.contactItemSingle}>
              <div className={styles.contactIconBox}>
                <BsGeoAlt className={styles.contactIcon} />
              </div>
              <div className={styles.contactDetails}>
                <p className={styles.contactLabel}>Address</p>
                <p className={styles.contactValue}>London Eye, London</p>
              </div>
            </div>

            <div className={styles.socialRow}>
              <div className={styles.socialHeading}>Social Media</div>
              <div className={styles.socialBtn}><FaFacebook /></div>
              <div className={styles.socialBtn}><BsTwitterX /></div>
              <div className={styles.socialBtn}><BsYoutube /></div>
              <div className={styles.socialBtn}><BsLinkedin /></div>
            </div>
          </div>
        </div>
      </section>
    );
}