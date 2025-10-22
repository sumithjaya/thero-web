"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Header.module.css";

type NavItem =
  | { label: string; href: string }
  | {
      label: string;
      items: { label: string; href: string; description?: string }[];
    };

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Calculators", href: "/calculators" },
  { label: "Our Team", href: "/team" },
  { label: "How we think", href: "/thinking" },
  { label: "Our investments", href: "/investments" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

function cn(...xs: (string | false | undefined)[]) {
  return xs.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close drawer when the route changes
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={styles.header}>
      <title>THERO :: The Retirement Optimiser</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <div className={styles.inner}>
        {/* Brand */}
        <Link href="/" className={styles.brand} aria-label="Go to homepage">
          <div className={styles.logoBox}>
            <Image
              src="/images/logo.png"
              alt="Thero logo"
              fill
              sizes="(max-width: 768px) 350px, 380px"
              priority
              className={styles.logoImg}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main" className={styles.navDesktop}>
          {NAV.map((item) =>
            "href" in item ? (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  styles.navLink,
                  isActive(item.href) && styles.navLinkActive
                )}
              >
                {item.label}
              </Link>
            ) : (
              <details key={item.label} className={styles.menuGroup}>
                <summary className={styles.menuSummary}>
                  <span className={styles.menuSummaryInner}>
                    {item.label}
                    <svg
                      className={styles.chevron}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                    </svg>
                  </span>
                </summary>
                <div className={styles.menuPopover}>
                  {item.items.map((it) => (
                    <Link key={it.href} href={it.href} className={styles.menuItem}>
                      <div className={styles.menuItemTitle}>{it.label}</div>
                      {it.description && (
                        <div className={styles.menuItemDesc}>{it.description}</div>
                      )}
                    </Link>
                  ))}
                </div>
              </details>
            )
          )}

          {/* CTA then divider */}
          <Link href="/get-started" className={styles.cta}>
            Get Started
          </Link>
          <div className={styles.vrule} />
        </nav>

        {/* Mobile toggle */}
        <button
          className={styles.mobileToggle}
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg viewBox="0 0 24 24" className={styles.iconMd} fill="currentColor">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </button>

        {/* Mobile Drawer */}
        {open && (
          <div
            className={styles.mobileOverlay}
            onClick={() => setOpen(false)}
            aria-hidden
          >
            <div
              ref={drawerRef}
              onClick={(e) => e.stopPropagation()}
              className={styles.drawer}
            >
              <div className={styles.drawerTop}>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={styles.brand}
                >
                  <div className={styles.mobileLogoBox}>
                    <Image
                      src="/images/logo.png"
                      alt="Thero"
                      fill
                      className={styles.logoImg}
                    />
                  </div>
                </Link>
                <button
                  aria-label="Close menu"
                  className={styles.closeBtn}
                  onClick={() => setOpen(false)}
                >
                  <svg viewBox="0 0 24 24" className={styles.iconSm} fill="currentColor">
                    <path d="M6.4 4.98L4.98 6.4 10.59 12l-5.6 5.6 1.41 1.41L12 13.41l5.6 5.6 1.41-1.41L13.41 12l5.6-5.6-1.41-1.41L12 10.59z" />
                  </svg>
                </button>
              </div>

              <div className={styles.mobileList}>
                {NAV.map((item) =>
                  "href" in item ? (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        styles.mobileLink,
                        isActive(item.href) && styles.mobileLinkActive
                      )}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <details key={item.label} className={styles.mobileGroup}>
                      <summary className={styles.mobileSummary}>{item.label}</summary>
                      <div className={styles.mobileSubList}>
                        {item.items.map((it) => (
                          <Link
                            key={it.href}
                            href={it.href}
                            onClick={() => setOpen(false)}
                            className={styles.mobileSubLink}
                          >
                            <div className={styles.mobileSubTitle}>{it.label}</div>
                            {it.description && (
                              <div className={styles.mobileSubDesc}>
                                {it.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </details>
                  )
                )}
              </div>

              <div className={styles.mobileCtaWrap}>
                <Link
                  href="/get-started"
                  onClick={() => setOpen(false)}
                  className={styles.mobileCta}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
