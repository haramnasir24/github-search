import { useState } from "react";
import useDebounce from "@/shared/hooks/useDebounce";
import useInfiniteScroll from "../../shared/hooks/useInfiniteScroll";
import { useGithubSearch } from "../../shared/hooks/useGithubSearch";
import SearchForm from "../../components/composites/search/SearchForm";
import type { SearchType } from "@/shared/types/type";

function SearchFormContainer() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedValue, setSelectedValue] = useState<SearchType>("users");
  // * useDebounce hook
  const debouncedSearchInput = useDebounce(searchInput, 500);

  // * react query hook
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGithubSearch({
    type: selectedValue,
    query: debouncedSearchInput,
  });

  const results = data?.pages.flatMap((page) => page.items) ?? []; // data.pages contains the fetched pages

  // * useInfiniteScroll hook
  const lastElementRef = useInfiniteScroll(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  });

  return (
    <SearchForm
      searchInput={searchInput}
      setSearchInput={setSearchInput}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      results={results}
      isLoading={isLoading}
      isError={isError}
      error={error as Error | null}
      lastElementRef={lastElementRef}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
}

export default SearchFormContainer;
