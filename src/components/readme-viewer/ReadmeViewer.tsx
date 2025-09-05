"use client";

import ReactMarkdown from "react-markdown";
import styles from "./readme-viewer.module.css";
import remarkGfm from "remark-gfm";

export default function ReadmeViewer({ content }: { content: string }) {
  return (
    <div className={styles.readme}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
