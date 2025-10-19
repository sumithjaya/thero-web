"use client";

import { BiMailSend, BiMessage, BiUserCircle } from "react-icons/bi";
import styles from "./ContactForm.module.css";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function ContactForm() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <form>
          <div className={styles.fieldset}>
            <div className={styles.grid}> 
              <div className={styles.fullWidth} suppressHydrationWarning>
                <label htmlFor="first-name" className={styles.label}>
                  <Image
                    src="/images/svg/contactUser.svg"
                    alt="user"
                    width={20}
                    height={20}
                  />{" "}
                  <div>First Name</div>
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="John"
                  className={styles.input}
                  suppressHydrationWarning
                />
              </div>

              {/* Last Name */}
              <div suppressHydrationWarning>
                <label htmlFor="last-name" className={styles.label}>
                  <Image
                    src="/images/svg/contactUser.svg"
                    alt="user"
                    width={20}
                    height={20}
                  />{" "}
                  <div>Last Name</div>
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Doe"
                  className={styles.input}
                  suppressHydrationWarning
                />
              </div>

              {/* Email */}
              <div className={styles.fullWidth} suppressHydrationWarning>
                <label htmlFor="email" className={styles.label}>
                  <Image
                    src="/images/svg/contactEmail.svg"
                    alt="user"
                    width={20}
                    height={20}
                  />{" "}
                  <div>Email</div>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className={styles.input}
                  suppressHydrationWarning
                />
              </div>

              {/* Message */}
              <div className={styles.fullWidth} >
                <label htmlFor="message" className={styles.label}>
                  <Image
                    src="/images/svg/contactMessage.svg"
                    alt="user"
                    width={20}
                    height={20}
                  />{" "}
                  <div>Message</div>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Write your message..."
                  className={styles.textarea}
                  suppressHydrationWarning
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ marginTop: "2rem" }}>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.contactTitle}>Contact Us</div>
        <div className={styles.contactIntro}>
          There is now an abundance of readable dummy texts. These are usually
          used when a text is required purely to fill a space.
        </div>
        <div className={styles.contactGridTop}>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <Image
                src="/images/svg/phone.svg"
                alt="image"
                width={154}
                height={154}
                className={styles.fullRound}
              />
            </div>
            <div className={styles.contactDetails}>
              <div className={styles.contactLabel}>Phone</div>
              <div className={styles.contactValue}>(+081) 9876 1234</div>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <Image
                src="/images/svg/mail.svg"
                alt="image"
                width={154}
                height={154}
                className={styles.fullRound}
              />
            </div>
            <div className={styles.contactDetails}>
              <div className={styles.contactLabel}>Email</div>
              <div className={styles.contactValue}>john@example.com</div>
            </div>
          </div>
        </div>
        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <Image
                src="/images/svg/location.svg"
                alt="image"
                width={154}
                height={154}
                className={styles.fullRound}
              />
            </div>
            <div className={styles.contactDetails}>
              <div className={styles.contactLabel}>Address</div>
              <div className={styles.contactValue}>
                123 Street, City, Country
              </div>
            </div>
          </div>
        </div>{" "}
        <div className={styles.socialMedia}>
          <div className={styles.socialMediaTitle}>Social Media:</div>
          <div className={styles.socialIcons}>
            <div className={styles.socialIcon}>
              <FaFacebook />
            </div>
            <div className={styles.socialIcon}>
              <FaXTwitter />
            </div>
            <div className={styles.socialIcon}>
              <FaYoutube />
            </div>
            <div className={styles.socialIcon}>
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}