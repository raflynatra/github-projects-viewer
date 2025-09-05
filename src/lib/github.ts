import { Repo, User } from "@/types/github";

export async function getUser(username: string): Promise<User> {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return {} as User;

  return res.json();
}

export async function getRepos(username: string): Promise<Repo[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return [];

  return res.json();
}

export async function getReadme(
  username: string,
  repo: string
): Promise<string> {
  const res = await fetch(
    `https://api.github.com/repos/${username}/${repo}/readme`
  );
  if (!res.ok) return "No README found.";

  const data = await res.json();
  const buff = Buffer.from(data.content, "base64");
  return buff.toString("utf-8");
}
