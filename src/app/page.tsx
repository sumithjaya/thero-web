import ContactForm from "@/components/ContactForm";
import CtaAndFaq from "@/components/CtaAndFaq";
import Header from "@/components/header";
import RatingStars from "@/components/Testimonials/RatingStars";
import Image from "next/image";
import Link from "next/link";
import { BiLocationPlus, BiMailSend, BiPhone } from "react-icons/bi";
import {
  BsArrowLeft,
  BsArrowRight,
  BsGeoAlt,
  BsLinkedin,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import styles from "./Home.module.css";
import TopWave from "@/components/Home/TopWave";
import Hero from "@/components/Home/Hero";
import RetirmentAssestment from "@/components/Home/RetirmentAssestment";
import JournalPlan from "@/components/Home/JournalPlan";
import Testimonials from "@/components/Home/Testimonials";
import CallToAction from "@/components/Home/CallToAction";
import FAQ from "@/components/Home/FAQ";

export default function Home() {
  return (
    <div className={styles.pageRoot}>
      <Hero />
      <TopWave />
      <RetirmentAssestment/>
      <JournalPlan/>
      <Testimonials />
      <CallToAction/>
      <FAQ/>
      <ContactForm />
    </div>
  );
}
