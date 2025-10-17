"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";
import { BiPhone, BiEnvelope, BiLogoWhatsapp } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="w-full">
      <div
        className="w-full"
        style={{
          backgroundImage: "url(/images/svg/footer.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%", // This stretches the SVG to full width and height
          width: "100%",
          minHeight: 300,padding:'80px'
        }}
      >
        {/* Content */}
        <div className="relative grid grid-cols-1 gap-10 px-8 py-10 sm:px-10 md:grid-cols-4 md:gap-8 lg:px-14">
          {/* Brand / blurb */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-2xl font-semibold text-white" style={{fontSize:'34px'}}>Retirement Optimiser</h3>
            <p className="max-w-xs text-sm leading-6 text-white " style={{fontSize:'16px' ,fontWeight:400}}>
              Lorem Ipsum is simply dummy text of the printing and industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>

          {/* Company */}
          <nav className="space-y-3">
            <h4 className="text-base font-semibold text-white" style={{fontSize:'22px'}} >Company</h4>
            <ul className="mt-2 space-y-2 text-sm text-white/85">
              <li>
                <Link href="/how-it-works" className="hover:underline">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/advisers" className="hover:underline">
                  For Advisers
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:underline">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:underline">
                  Testimonial
                </Link>
              </li>
            </ul>
          </nav>

          {/* Links */}
          <nav className="space-y-3">
            <h4 className="text-base font-semibold text-white" style={{fontSize:'22px'}}>Links</h4>
            <ul className="mt-2 space-y-2 text-sm text-white/85">
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-white" style={{fontSize:'22px'}}>Contact</h4>
            <ul className="mt-2 space-y-3 text-sm">
              <li className="flex items-center gap-3 text-white/85">
                <BiPhone className="text-lg" />
                <span>+012 345 657 89</span>
              </li>
              <li className="flex items-center gap-3 text-white/85">
                <BiEnvelope className="text-lg" />
                <span>retirementoptimiser@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-white/85">
                <BiLogoWhatsapp className="text-lg" />
                <span>+78 568 585</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-8 border-t border-white/15" />

        {/* Bottom bar */}
        <div className="relative flex flex-col items-center justify-between gap-4 px-8 py-6 sm:flex-row lg:px-14">
          <p className="text-xs sm:text-sm text-white/80">
            © {new Date().getFullYear()} Retirement Optimiser. All rights
            reserved.
          </p>

          <div className="flex items-center gap-3">
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
    <Link
      href={href}
      aria-label={aria}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-white/25 bg-white/5 hover:bg-white/10 transition"
    >
      <span className="text-white/90">{children}</span>
    </Link>
  );
}