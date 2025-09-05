"use client";

import SearchBar from "@/components/search-bar/SearchBar";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>GitHub Projects Viewer</h1>
        <p className={styles.subtitle}>
          Search for any GitHub username and explore their repositories with
          beautifully rendered READMEs.
        </p>
        <SearchBar />
      </section>

      <section className={styles.features}>
        <h2>Why use this app?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>Easy Search</h3>
            <p>Quickly find any GitHub user and browse their repositories.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Readme Preview</h3>
            <p>See project README files formatted for easy reading.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Responsive Design</h3>
            <p>Enjoy a seamless experience on desktop, tablet, and mobile.</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to explore GitHub projects?</h2>
        <p>Enter a username above and start exploring!</p>
      </section>
    </div>
  );
}
