"use client";

import ContactForm from "@/components/ContactForm";
import CtaAndFaq from "@/components/CtaAndFaq";
import Hero from "@/components/Home/Hero";
import TeamScroller from "@/components/TeamScroller";
import RatingStars from "@/components/Testimonials/RatingStars";
import Image from "next/image";
import Link from "next/link";
import { BiMailSend, BiPhone } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight, BsGeoAlt, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

import styles from "./Home.module.css";
import HeroInvestment from "@/components/hero/HeroInvestment";

export default function Home() {
  return (
    <div className="font-sans grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20">
       <HeroInvestment/>

      <div className={styles.waveWrapper}>
        <svg
          className={styles.waveSvg}
          viewBox="0 0 1240 160"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M1189.9 0C1208.69 1.50182e-10 1218.08 2.14568e-05 1225.07 4.05859C1229.58 6.67676 1233.32 10.4243 1235.94 14.9316C1240 21.919 1240 31.3128 1240 50.0996V109.9C1240 128.687 1240 138.081 1235.94 145.068C1233.32 149.576 1229.58 153.323 1225.07 155.941C1218.08 160 1208.69 160 1189.9 160H886.734C870.852 160 861.944 145.732 854.402 131.754C851.623 126.603 847.397 122.377 842.246 119.598C835.578 116 826.751 116 809.1 116H430.9C413.249 116 404.422 116 397.754 119.598C392.603 122.377 388.377 126.603 385.598 131.754C378.056 145.732 369.148 160 353.266 160H50.0996C31.3128 160 21.919 160 14.9316 155.941C10.4243 153.323 6.67676 149.576 4.05859 145.068C2.50622e-05 138.081 1.97247e-10 128.687 0 109.9V50.0996C1.97247e-10 31.3128 2.50622e-05 21.919 4.05859 14.9316C6.67676 10.4243 10.4243 6.67676 14.9316 4.05859C21.919 2.51158e-05 31.3128 1.97996e-10 50.0996 0H1189.9Z"
            fill="#002855"
          />
        </svg>
      </div>

      <section>
        <TeamScroller />
      </section>

      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsLeft}>
          <div>
            <svg
              width="65"
              height="52"
              viewBox="0 0 65 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M24.581 10.2144H25.7915V0H24.581C18.0636 0.00896991 11.8158 2.60229 7.2078 7.21122C2.59977 11.8201 0.00768621 18.0685 0 24.5858V51.4837H28.106V23.3753H10.258C10.5663 19.7875 12.2083 16.4457 14.8599 14.0092C17.5114 11.5728 20.98 10.2188 24.581 10.2144ZM25.685 25.7988V49.0651H2.42106V24.5858C2.4277 18.919 4.60203 13.4693 8.49822 9.35437C12.3944 5.23939 17.7172 2.77087 23.3753 2.45495V7.82727C19.1437 8.13763 15.1858 10.0363 12.2955 13.1426C9.40516 16.2489 7.79609 20.3331 7.79096 24.5761V25.7867L25.685 25.7988Z" fill="#D1DAE8"/>
              <path d="M46.5592 23.3753C46.867 19.7871 48.5087 16.4446 51.1603 14.0077C53.812 11.5707 57.2808 10.2164 60.8822 10.212H62.0927V0H60.8822C54.3638 0.00704935 48.1144 2.5996 43.5052 7.2088C38.896 11.818 36.3034 18.0674 36.2964 24.5858V51.4837H64.4V23.3753H46.5592ZM61.9789 49.0651H38.7126V24.5858C38.7192 18.9194 40.8932 13.4701 44.7889 9.35516C48.6846 5.24025 54.0068 2.77147 59.6644 2.45495V7.82727C55.4328 8.13763 51.4749 10.0363 48.5846 13.1426C45.6943 16.2489 44.0852 20.3331 44.0801 24.5761V25.7867H61.9789V49.0651Z" fill="#D1DAE8"/>
            </svg>
          </div>

          <h4 className={styles.testimonialsTitle}>
            What they say, from our <span className={styles.accent}>clients</span>
          </h4>

          <p className={styles.testimonialsSubtitle}>
            Our customers says about serving quality and other.
          </p>

          <div className={styles.testimonialsNav}>
            <button className={styles.navBtnGhost} type="button" aria-label="Previous">
              <BsArrowLeft />
            </button>
            <button className={styles.navBtnPrimary} type="button" aria-label="Next">
              <BsArrowRight />
            </button>
          </div>
        </div>

        <div className={styles.testimonialsRight}>
          <div className={styles.bgRectWrap} aria-hidden="true">
            <svg width="532" height="540" viewBox="0 0 532 540" xmlns="http://www.w3.org/2000/svg">
              <rect width="532" height="540" rx="20" fill="#ECF4FE" />
            </svg>
          </div>

          <div className={styles.card}>
            <div className={styles.avatarWrap}>
              <div className="relative" style={{ height: 80, width: 80 }}>
                <Image
                  src="/images/client1.jpg"
                  alt="Client photo"
                  fill
                  className="rounded-full object-cover object-center"
                />
              </div>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                Very helpful in urgent situation, love the product and best service.
              </p>
              <RatingStars value={4.6} colorClass="text-amber-400" />
              <div className={styles.personRow}>
                <svg width="24" height="64" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 8a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1z" fill="#bdbfc0ff"/>
                </svg>
                <p className={styles.personName}>Robert Smith</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.avatarWrap}>
              <div className="relative" style={{ height: 80, width: 80 }}>
                <Image
                  src="/images/client2.jpg"
                  alt="Client photo"
                  fill
                  className="rounded-full object-cover object-center"
                />
              </div>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                Love the interface and really easy to use so far, Great service!
              </p>
              <RatingStars value={4.6} colorClass="text-amber-400" />
              <div className={styles.personRow}>
                <svg width="24" height="64" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 8a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1z" fill="#bdbfc0ff"/>
                </svg>
                <p className={styles.personName}>Sarah K.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaWideSection}>
        <div className={styles.ctaWide}>
          <div className={styles.ctaCopy}>
            <h1 className={styles.ctaTitle}>Will I have enough money?</h1>
            <p className={styles.ctaSubtitle}>
              Find out if your income will be sufficient in the years ahead.
            </p>
          </div>

          <div>
            <Link href="/page" className={styles.ctaButton}>
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.faqGrid}>
          <div className={styles.faqLeft}>
            <h1 className={styles.faqH1}>
              Any <span className={styles.accent}>questions?</span>
            </h1>
            <h1 className={styles.faqH1}>We got you.</h1>
            <p className={styles.faqLead}>
              Yet bed any for assistance indulgence unpleasing. Not thoughts all
              exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
            </p>
            <div className={styles.faqLinkWrap}>
              <p className={styles.faqLinkText}>More FAQs</p>
              <BsArrowRight className={styles.faqLinkIcon} />
            </div>
          </div>
          <div className={styles.faqRight}>
            <CtaAndFaq />
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>
          <div className={styles.contactLeft}>
            <ContactForm />
          </div>

          <div className={styles.contactRight}>
            <h5 className={styles.contactTitle}>Contact Us</h5>
            <p className={styles.contactIntro}>
              There is now an abundance of readable dummy texts. These are usually
              used when a text is required purely to fill a space.
            </p>

            <div className={styles.contactRow2}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <BiPhone className={styles.iconLg} />
                </div>
                <div className={styles.contactTextCol}>
                  <p className={styles.contactLabel}>Phone</p>
                  <p className={styles.contactValue}>(+081) 9876 1234</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <BiMailSend className={styles.iconLg} />
                </div>
                <div className={styles.contactTextCol}>
                  <p className={styles.contactLabel}>Email</p>
                  <p className={styles.contactValue}>johndoe@gmail.com</p>
                </div>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <BsGeoAlt className={styles.iconLg} />
              </div>
              <div className={styles.contactTextCol}>
                <p className={styles.contactLabel}>Address</p>
                <p className={styles.contactValue}>London Eye, London</p>
              </div>
            </div>

            <div className={styles.socialBlock}>
              <div className={styles.socialTitle}>Social Media</div>
              <div className={styles.socialIcon}><FaFacebook /></div>
              <div className={styles.socialIcon}><BsTwitterX /></div>
              <div className={styles.socialIcon}><BsYoutube /></div>
              <div className={styles.socialIcon}><BsLinkedin /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
