"use client";

import { Repo } from "@/types/github";
import styles from "./repo-item.module.css";
import Modal from "../modal/Modal";
import React, { useState } from "react";
import { getReadme } from "@/lib/github";
import ReadmeViewer from "../readme-viewer/ReadmeViewer";

export default function RepoItem({ repo }: { repo: Repo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [readme, setReadme] = useState<string | null>(null);

  const handleOpen = async () => {
    setIsOpen(true);
    const readme = getReadme(repo.owner.login, repo.name);
    setReadme(await readme);
  };

  return (
    <React.Fragment key={repo.id}>
      <li className={styles.repoCard} onClick={handleOpen}>
        <div>
          <h3>{repo.name}</h3>
          <p>{repo.description || "No description"}</p>
        </div>

        <div className={styles.repoMeta}>
          <span>⭐ {repo.stargazers_count}</span>
          <span>🍴 {repo.forks_count}</span>
          <span>🕒 {new Date(repo.updated_at).toLocaleDateString()}</span>
        </div>
      </li>

      <Modal title="Readme" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {readme ? <ReadmeViewer content={readme} /> : <p>Loading...</p>}
      </Modal>
    </React.Fragment>
  );
}
