export interface User {
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  bio: string;
  blog: string;
  url: string;
  following: number;
  followers: number;
  public_repos: number;
}

export interface Repo {
  owner: { login: string };
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}
