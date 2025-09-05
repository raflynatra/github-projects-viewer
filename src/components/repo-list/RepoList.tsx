import RepoItem from "@/components/repo-item/RepoItem";
import { Repo } from "@/types/github";
import styles from "./repo-list.module.css";

interface Props {
  repos: Repo[];
}

export default function RepoList({ repos }: Props) {
  if (!repos.length) return <p>No repositories found.</p>;

  return (
    <section className={styles.repos}>
      <h2>Repositories</h2>
      {repos.length === 0 ? (
        <p className={styles.noRepos}>No repositories found.</p>
      ) : (
        <ul>
          {repos.map((repo: Repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </ul>
      )}
    </section>
  );
}
