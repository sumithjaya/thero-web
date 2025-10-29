"use client";

import CtaAndFaq from "@/components/CtaAndFaq";
import ContactForm from "@/components/ContactForm";
import HeroTeam from "@/components/hero/HeroTeam";
import Image from "next/image";
import { BiMailSend, BiPhone } from "react-icons/bi";
import {
  BsArrowRight,
  BsGeoAlt,
  BsLinkedin,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

import styles from "./TeamPage.module.css";
import Link from "next/link";

export default function Calculators() {
  const team = [
    { name: "Alice Johnson", role: "Retirement Specialist", img: "/images/team/1.jpg" },
    { name: "Bob Smith", role: "Financial Advisor", img: "/images/team/2.jpg" },
    { name: "Clara Lee", role: "Pension Expert", img: "/images/team/3.jpg" },
    { name: "David Kim", role: "Wealth Planner", img: "/images/team/4.jpg" },
    { name: "Ella Brown", role: "Superannuation Specialist", img: "/images/team/5.jpg" },
    { name: "Frank White", role: "Tax Strategist", img: "/images/team/6.jpg" },
    { name: "Grace Green", role: "Client Success Manager", img: "/images/team/7.jpg" },
    { name: "Henry Black", role: "Investment Consultant", img: "/images/team/8.jpg" },
  ];

  return (
    <div className="font-sans grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20">
      <HeroTeam />

      {/* Team grid */}
      <section className={styles.teamSection}>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className={styles.teamCard}>
              <Image
                src={member.img}
                alt={member.name}
                width={290}
                height={367}
                className={styles.teamImg}
              />
              <div className={styles.namePlate}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
       <div className={styles.teamLinkWrap}>
         <Link href="/team" className={styles.teamLink}>Book a Chat</Link> 
       </div>
      </section>

      {/* How we calculate */}
      <section className={styles.calcSection}>
        <div className={styles.calcGrid}>
          <div className={styles.calcLeft}>
            <h1 className={styles.h1}>
              <span className={styles.accent}> How we calculate </span>
            </h1>
            <h1 className={styles.h1}>Our assessment and Our assumptions</h1>
            <p className={styles.lead}>
              Yet bed any for assistance indulgence unpleasing. Not thoughts all
              exercise blessing. Indulgence way everything joy alteration
              boisterous the attachment.
            </p>
            <div className={styles.faqLinkWrap}>
              <p className={styles.faqLinkText}>More FAQs</p>
              <BsArrowRight className={styles.faqLinkIcon} />
            </div>
          </div>
          <div className={styles.calcRight}>
            <CtaAndFaq />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>
          <div className={styles.contactLeft}>
            <ContactForm />
          </div>

        
        </div>
      </section>
    </div>
  );
}
