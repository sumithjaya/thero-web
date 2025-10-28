"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { HiOutlineBars3, HiOutlineBars4, HiXMark } from "react-icons/hi2";

/** helper hook */
function useActive() {
  const pathname = usePathname();

  const normalize = (p: string) => {
    if (!p) return "/";
    const n = p.replace(/\/+$/, "");
    return n.length ? n : "/";
  };

  const current = normalize(pathname);

  const isActive = (href: string) => current === normalize(href);
  const isSectionActive = (href: string) =>
    current === normalize(href) || current.startsWith(normalize(href) + "/");

  return { pathname: current, isActive, isSectionActive };
}

/** Memoized child so it doesn't re-render unless props change */
const MobileMenu = React.memo(function MobileMenu({
  onClose,
}: {
  onClose: () => void;
}) {
  const { pathname, isActive } = useActive();

  return (
    <div
      className={styles.mobileOverlay}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className={styles.drawer}
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <div className={styles.drawerTop}>
          <div className={styles.logoBoxNav}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={80}
              priority
              className={styles.logoImg}
            />
          </div>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close menu"
          >
             <HiXMark/> 
          </button>
        </div>

        <nav className={styles.mobileList}>
          <Link
            href="/calculators"
            className={`${styles.navLink} ${
              isActive("/calculators") ? styles.activeLinkMobile : ""
            }`}
            aria-current={isActive("/calculators") ? "page" : undefined}
            onClick={onClose}
          >
            Calculators
          </Link>

          <Link
            href="/investments"
            className={`${styles.navLink} ${
              isActive("/investments") ? styles.activeLinkMobile : ""
            }`}
            aria-current={isActive("/investments") ? "page" : undefined}
            onClick={onClose}
          >
            Investments
          </Link>

          <Link
            href="/thinking"
            className={`${styles.navLink} ${
              isActive("/thinking") ? styles.activeLinkMobile : ""
            }`}
            aria-current={isActive("/thinking") ? "page" : undefined}
            onClick={onClose}
          >
            Thinking
          </Link>

          <Link
            href="/team"
            className={`${styles.navLink} ${
              isActive("/team") ? styles.activeLinkMobile : ""
            }`}
            aria-current={isActive("/team") ? "page" : undefined}
            onClick={onClose}
          >
            Team
          </Link>

          <Link
            href="/blog"
            className={`${styles.navLink} ${
              isActive("/blog") ? styles.activeLinkMobile : ""
            }`}
            aria-current={isActive("/blog") ? "page" : undefined}
            onClick={onClose}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`${styles.navLink} ${
              isActive("/contact") ? styles.activeLinkMobile : ""
            }`}
            aria-current={isActive("/contact") ? "page" : undefined}
            onClick={onClose}
          >
            Contact
          </Link>

          <div className={styles.mobileCtaWrap}>
            <Link
              href="/get-started"
              className={styles.mobileCta}
              onClick={onClose}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
});

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { isActive } = useActive();

  useEffect(() => setMounted(true), []);

  // body scroll lock while menu is open
  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted, open]);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link className={styles.brand} href="/">
            <div className={styles.logoBox}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={130}
                height={80}
                priority
                className={styles.logoImg}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className={styles.navDesktop} aria-label="Main">
            <Link
              href="/calculators"
              className={`${styles.navLink} ${
                isActive("/calculators") ? styles.activeLink : ""
              }`}
              aria-current={isActive("/calculators") ? "page" : undefined}
            >
              Calculators
            </Link>
            <Link
              href="/investments"
              className={`${styles.navLink} ${
                isActive("/investments") ? styles.activeLink : ""
              }`}
              aria-current={isActive("/investments") ? "page" : undefined}
            >
              Investments
            </Link>
            <Link
              href="/thinking"
              className={`${styles.navLink} ${
                isActive("/thinking") ? styles.activeLink : ""
              }`}
              aria-current={isActive("/thinking") ? "page" : undefined}
            >
              Thinking
            </Link>
            <Link
              href="/team"
              className={`${styles.navLink} ${
                isActive("/team") ? styles.activeLink : ""
              }`}
              aria-current={isActive("/team") ? "page" : undefined}
            >
              Team
            </Link>
            <Link
              href="/blog"
              className={`${styles.navLink} ${
                isActive("/blog") ? styles.activeLink : ""
              }`}
              aria-current={isActive("/blog") ? "page" : undefined}
            >
              Blog
            </Link>
            <div className={styles.vrule} />
            <Link href="/get-started" className={styles.cta}>
              Get Started
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className={styles.mobileToggle}
            onClick={handleOpen}
            aria-label="Open menu"
          >
            <HiOutlineBars3/>
          </button>
        </div>
      </header>

      {/* Portal the memoized child when open */}
      {mounted && open
        ? createPortal(<MobileMenu onClose={handleClose} />, document.body)
        : null}
    </>
  );
}
