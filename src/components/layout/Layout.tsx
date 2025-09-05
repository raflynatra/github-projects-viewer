"use client";

import React, { useState } from "react";
import styles from "./layout.module.css";
import SearchBar from "../search-bar/SearchBar";
import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          GitHub Viewer
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.show : ""}`}>
          <SearchBar />
        </nav>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} • raflynatra • GitHub Projects
          Viewer
        </p>
      </footer>
    </div>
  );
}
