import RepoList from "@/components/repo-list/RepoList";
import { getRepos, getUser } from "@/lib/github";
import styles from "./page.module.css";
import Image from "next/image";

type UserReposPageProps = {
  params: Promise<{ username: string }>;
};

export default async function UserReposPage({ params }: UserReposPageProps) {
  const { username } = await params;
  const user = await getUser(username);
  const repos = await getRepos(username);

  return (
    <main className={styles.container}>
      <section className={styles.profile}>
        <Image
          src={user.avatar_url}
          alt={user.login}
          className={styles.avatar}
          width={100}
          height={100}
          priority
        />
        <div>
          <h1>{user.name || user.login}</h1>
          <p>{user.bio || "No bio available."}</p>
          <div className={styles.meta}>
            <span>👥 {user.followers} followers</span>
            <span>📌 {user.public_repos} repos</span>
          </div>
        </div>
      </section>

      <RepoList repos={repos} />
    </main>
  );
}
