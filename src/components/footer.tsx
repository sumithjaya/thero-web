"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";
import { BiPhone, BiEnvelope, BiLogoWhatsapp } from "react-icons/bi";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bgWrap}>
        {/* Content */}
        <div className={styles.grid}>
          {/* Brand / blurb */}
          <div className={styles.brandBlock}>
            <h3 className={styles.brandTitle}>Retirement Optimiser</h3>
            <p className={styles.brandText}>
              Lorem Ipsum is simply dummy text of the printing and industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s.
            </p>
          </div>

          {/* Company */}
          <nav className={styles.navBlock}>
            <h4 className={styles.navTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/how-it-works" className={styles.link}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/advisers" className={styles.link}>
                  For Advisers
                </Link>
              </li>
              <li>
                <Link href="/resources" className={styles.link}>
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className={styles.link}>
                  Testimonial
                </Link>
              </li>
            </ul>
          </nav>

          {/* Links */}
          <nav className={styles.navBlock}>
            <h4 className={styles.navTitle}>Links</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/privacy" className={styles.link}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={styles.link}>
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className={styles.link}>
                  Careers
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className={styles.navBlock}>
            <h4 className={styles.navTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <BiPhone className={styles.contactIcon} />
                <span>+012 345 657 89</span>
              </li>
              <li className={styles.contactItem}>
                <BiEnvelope className={styles.contactIcon} />
                <span>retirementoptimiser@gmail.com</span>
              </li>
              <li className={styles.contactItem}>
                <BiLogoWhatsapp className={styles.contactIcon} />
                <span>+78 568 585</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Retirement Optimiser. All rights
            reserved.
          </p>

          <div className={styles.socials}>
            <SocialIcon href="#" aria="Facebook">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="#" aria="X (Twitter)">
              <FaXTwitter />
            </SocialIcon>
            <SocialIcon href="#" aria="YouTube">
              <FaYoutube />
            </SocialIcon>
            <SocialIcon href="#" aria="LinkedIn">
              <FaLinkedinIn />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  aria,
  children,
}: {
  href: string;
  aria: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} aria-label={aria} className={styles.socialIcon}>
      <span className={styles.socialIconInner}>{children}</span>
    </Link>
  );
}
