"use client";

import ContactForm from "@/components/ContactForm";
import CtaAndFaq from "@/components/CtaAndFaq";
import Hero from "@/components/Home/Hero";
import TeamScroller from "@/components/TeamScroller";
import RatingStars from "@/components/Testimonials/RatingStars";
import Image from "next/image";
import Link from "next/link";
import { BiMailSend, BiPhone } from "react-icons/bi";
import {
  BsArrowLeft,
  BsArrowRight,
  BsGeoAlt,
  BsLinkedin,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

import styles from "./Home.module.css";
import HeroInvestment from "@/components/hero/HeroInvestment";
import WhyCommittee from "@/components/Investment/WhyCommittee";
import OurProcess from "@/components/Investment/OurProcess";

export default function Home() {
  return (
    <div className="font-sans grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20">
      <HeroInvestment />

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
      <WhyCommittee />
      <section>
        <TeamScroller />
      </section>
      <OurProcess/>
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
              exercise blessing. Indulgence way everything joy alteration
              boisterous the attachment.
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
              There is now an abundance of readable dummy texts. These are
              usually used when a text is required purely to fill a space.
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
              <div className={styles.socialIcon}>
                <FaFacebook />
              </div>
              <div className={styles.socialIcon}>
                <BsTwitterX />
              </div>
              <div className={styles.socialIcon}>
                <BsYoutube />
              </div>
              <div className={styles.socialIcon}>
                <BsLinkedin />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
