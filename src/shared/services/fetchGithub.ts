import type { GithubResponse, SearchType } from "../types/type";

export const fetchGithub = async (
    type: SearchType,
    query: string,
    page: number,
    perPage: number
  ): Promise<GithubResponse> => {
    if (!query || query.length < 3) return { items: [], hasMore: false };
    const endpoint =
      type === "users"
        ? `https://api.github.com/search/users?q=${encodeURIComponent(
            query
          )}&page=${page}&per_page=${perPage}`
        : `https://api.github.com/search/repositories?q=${encodeURIComponent(
            query
          )}&page=${page}&per_page=${perPage}`;
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    return {
      items: data.items || [],
      hasMore: (data.items?.length ?? 0) === perPage,
    };
  };