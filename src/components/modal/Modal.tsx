"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    // close modal on ESC key
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden"; // prevent background scroll

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <h2>{title}</h2>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.body
  );
}
