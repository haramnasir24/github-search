export type UserResult = {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  name?: string;
  location?: string;
};

export type RepoResult = {
  id: number;
  name: string;
  full_name: string;
  url: string;
  owner: UserResult;
  stargazers_count: number;
  forks_count: number;
  language?: string;
};
