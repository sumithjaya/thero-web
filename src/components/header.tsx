"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

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
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>close_fill</title>{" "}
                <g
                  id="页面-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g id="System" transform="translate(-288.000000, -48.000000)">
                    {" "}
                    <g
                      id="close_fill"
                      transform="translate(288.000000, 48.000000)"
                    >
                      {" "}
                      <path
                        d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                        id="MingCute"
                        fill-rule="nonzero"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M12,14.1215 L17.3032,19.4248 C17.889,20.0106 18.8388,20.0106 19.4246,19.4248 C20.0104,18.839 20.0104,17.8893 19.4246,17.3035 L14.1213,12.0002 L19.4246,6.6969 C20.0104,6.11112 20.0104,5.16137 19.4246,4.57558 C18.8388,3.9898 17.889,3.9898 17.3032,4.57558 L12,9.87888 L6.69665,4.57557 C6.11086,3.98978 5.16111,3.98978 4.57533,4.57557 C3.98954,5.16136 3.98954,6.1111 4.57533,6.69689 L9.87863,12.0002 L4.57533,17.3035 C3.98954,17.8893 3.98954,18.839 4.57533,19.4248 C5.16111,20.0106 6.11086,20.0106 6.69665,19.4248 L12,14.1215 Z"
                        id="路径"
                        fill="#09244B"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
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
            ☰
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
