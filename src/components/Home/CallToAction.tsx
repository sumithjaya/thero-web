'use client';
import Link from "next/link";
import styles from "./CallToAction.module.css"; 
import { useEffect, useState } from "react";

export default function CallToAction() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      <section className={styles.sectionPadLg}>
        <div className={styles.ctaBar}>
          <div className={styles.ctaBarTextCol}>
            <h1 className={styles.ctaTitle}>Will I have enough money?</h1>
            <p className={styles.ctaSubtitle}>
              Find out if your income will be sufficient in the years ahead.
            </p>
          </div>
          <div>
            <button className={styles.ctaPrimary} onClick={openModal}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && <TypeformModal onClose={closeModal} />}
    </>
  );
}

// Separate component for the modal with Typeform
function TypeformModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    // Load Typeform script
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Reinitialize Typeform when script loads
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
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.modalClose} onClick={onClose}>
          ×
        </button>
        <div data-tf-live="01JVV0Z9AD1YHFTP7P7Z2QVB4A"></div>
      </div>
    </div>
  );
}