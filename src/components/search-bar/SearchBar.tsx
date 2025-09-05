"use client";

import { useRouter } from "next/navigation";
import styles from "./search-bar.module.css";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/${username}`);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className={styles.button}>Search</button>
    </form>
  );
}
