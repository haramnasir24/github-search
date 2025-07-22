import { useInfiniteQuery } from "@tanstack/react-query";
import type { SearchType, GithubResponse } from "../types/type";
import { fetchGithub } from "../services/fetchGithub";

interface UseGithubSearchProps {
  type: SearchType;
  query: string;
  perPage?: number;
}

// * uses react query for fetching data and infinite scrolling
export function useGithubSearch({
  type,
  query,
  perPage = 30,
}: UseGithubSearchProps) {
  return useInfiniteQuery<GithubResponse, Error>({
    queryKey: ["github-search", type, query, perPage],
    queryFn: async ({ pageParam = 1 }: { pageParam?: unknown }) =>
      fetchGithub(
        type,
        query,
        typeof pageParam === "number" ? pageParam : 1,
        perPage
      ),
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
    enabled: !!query && query.length >= 3,
    staleTime: 1000 * 60 * 5, // 5 minutes
    initialPageParam: 1,
  });
}
