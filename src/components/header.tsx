"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2"; 

/** tiny classNames helper (no dependency) */
const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

/** helper hook */
function useActive() {
  const pathname = usePathname();

  const normalize = (p: string | null | undefined) => {
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

/** Get Started Modal Component */
const GetStartedModal = React.memo(function GetStartedModal({
  onClose,
}: {
  onClose: () => void;
}) {
  useEffect(() => {
    // Load Typeform script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup and reinitialize Typeform when modal opens
    script.onload = () => {
      // @ts-ignore
      if (window.tf && window.tf.load) {
        // @ts-ignore
        window.tf.load();
      }
    };

    return () => {
      // Remove script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '32px',
          maxWidth: '100%',
          width: '90%',
          maxHeight: '80vh',
          overflow: 'auto',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '8px',
            lineHeight: 1,
            color: '#333',
            zIndex: 1,
          }}
          aria-label="Close modal"
        >
          <HiXMark />
        </button>
        
        <div data-tf-live="01JVV0Z9AD1YHFTP7P7Z2QVB4A"></div>
      </div>
    </div>
  );
});

/** Memoized child so it doesn't re-render unless props change */
const MobileMenu = React.memo(function MobileMenu({
  onClose,
  onOpenModal,
}: {
  onClose: () => void;
  onOpenModal: () => void;
}) {
  const { isSectionActive } = useActive();

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
            <HiXMark />
          </button>
        </div>

        <nav className={styles.mobileList} aria-label="Mobile Main">
          <Link
            href="/calculators"
            className={cx(
              styles.navLink,
              isSectionActive("/calculators")
                ? styles.activeLinkMobile
                : undefined
            )}
            aria-current={isSectionActive("/calculators") ? "page" : undefined}
            onClick={onClose}
          >
            Calculators
          </Link>

          <Link
            href="/investments"
            className={cx(
              styles.navLink,
              isSectionActive("/investments")
                ? styles.activeLinkMobile
                : undefined
            )}
            aria-current={isSectionActive("/investments") ? "page" : undefined}
            onClick={onClose}
          >
            Investments
          </Link>

          <Link
            href="/thinking"
            className={cx(
              styles.navLink,
              isSectionActive("/thinking") ? styles.activeLinkMobile : undefined
            )}
            aria-current={isSectionActive("/thinking") ? "page" : undefined}
            onClick={onClose}
          >
            Thinking
          </Link>

          <Link
            href="/team"
            className={cx(
              styles.navLink,
              isSectionActive("/team") ? styles.activeLinkMobile : undefined
            )}
            aria-current={isSectionActive("/team") ? "page" : undefined}
            onClick={onClose}
          >
            Team
          </Link>

          <Link
            href="/blog"
            className={cx(
              styles.navLink,
              isSectionActive("/blog") ? styles.activeLinkMobile : undefined
            )}
            aria-current={isSectionActive("/blog") ? "page" : undefined}
            onClick={onClose}
          >
            Blog
          </Link>

          <div className={styles.mobileCtaWrap}>
            <button 
              onClick={onOpenModal}
              style={{
                width: '100%',
                padding: '12px 24px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
              }}
            >
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
});

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { isSectionActive } = useActive();

  useEffect(() => setMounted(true), []);

  // body scroll lock while menu is open
  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    if (open || modalOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted, open, modalOpen]);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  
  const openModal = useCallback(() => {
    setModalOpen(true);
    setOpen(false); // Close mobile menu when opening modal
  }, []);
  
  const closeModal = useCallback(() => setModalOpen(false), []);

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
              className={cx(
                styles.navLink,
                isSectionActive("/calculators") ? styles.activeLink : undefined
              )}
              aria-current={
                isSectionActive("/calculators") ? "page" : undefined
              }
            >
              Calculators
            </Link>

            <Link
              href="/investments"
              className={cx(
                styles.navLink,
                isSectionActive("/investments") ? styles.activeLink : undefined
              )}
              aria-current={
                isSectionActive("/investments") ? "page" : undefined
              }
            >
              Investments
            </Link>

            <Link
              href="/thinking"
              className={cx(
                styles.navLink,
                isSectionActive("/thinking") ? styles.activeLink : undefined
              )}
              aria-current={isSectionActive("/thinking") ? "page" : undefined}
            >
              Thinking
            </Link>

            <Link
              href="/team"
              className={cx(
                styles.navLink,
                isSectionActive("/team") ? styles.activeLink : undefined
              )}
              aria-current={isSectionActive("/team") ? "page" : undefined}
            >
              Team
            </Link>

            <Link
              href="/blog"
              className={cx(
                styles.navLink,
                isSectionActive("/blog") ? styles.activeLink : undefined
              )}
              aria-current={isSectionActive("/blog") ? "page" : undefined}
            >
              Blog
            </Link>

            <div className={styles.vrule} />
            <button className={styles.cta} onClick={openModal}>
              Get Started
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            className={styles.mobileToggle}
            onClick={handleOpen}
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            <HiOutlineBars3 />
          </button>
        </div>
      </header>

      {/* Portal the memoized child when open */}
      {mounted && open
        ? createPortal(
            <MobileMenu onClose={handleClose} onOpenModal={openModal} />,
            document.body
          )
        : null}

      {/* Portal the modal when open */}
      {mounted && modalOpen
        ? createPortal(<GetStartedModal onClose={closeModal} />, document.body)
        : null}
    </>
  );
}