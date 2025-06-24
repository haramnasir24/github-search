import { useCallback, useState } from "react";
import { css } from "../styled-system/css";
import useDebounce from "./hooks/useDebounce";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import { cacheResults } from "./slices/searchSlice";
import UserCard from "./components/UserCard";
import RepoCard from "./components/RepoCard";
import type { RepoResult, UserResult } from "./types/type";

function SearchForm() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedValue, setSelectedValue] = useState("users");
  const [results, setResults] = useState<(UserResult | RepoResult)[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const cache = useSelector((state: RootState) => state.search.cache);

  const cacheKey = `${selectedValue}:${searchInput}`;

  // useDebounce hook usage
  useDebounce(
    () => {
      if (searchInput.length >= 3) {
        // Check cache first
        if (cache[cacheKey]) {
          setResults(cache[cacheKey].results as (UserResult | RepoResult)[]);
          return;
        }

        setLoading(true);
        setError(null);

        const endpoint =
          selectedValue === "users"
            ? `https://api.github.com/search/users?q=${encodeURIComponent(searchInput)}`
            : `https://api.github.com/search/repositories?q=${encodeURIComponent(searchInput)}`;

        fetch(endpoint)
          .then((res) => res.json())
          .then((data) => {
            setResults(data.items || []);
            dispatch(
              cacheResults({
                term: searchInput,
                entity: selectedValue,
                results: data.items || [],
              })
            );
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message || "Something went wrong");
            setResults([]);
            setLoading(false);
          });
      } else {
        setResults([]);
        setError(null);
        setLoading(false);
      }
    },
    500,
    [searchInput, selectedValue, cache]
  );

  // infinite scrolling
  const fetchMore = useCallback(() => {
    if (!hasMore || searchInput.length < 3) return;
    const endpoint =
      selectedValue === "users"
        ? `https://api.github.com/search/users?q=${encodeURIComponent(searchInput)}`
        : `https://api.github.com/search/repositories?q=${encodeURIComponent(searchInput)}`;

    setLoading(true);
    setError(null);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setResults((prev) => [...prev, ...(data.items || [])]);
        setHasMore((data.items?.length ?? 0) > 0);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, [searchInput, selectedValue, hasMore]);

  const lastElementRef = useInfiniteScroll(fetchMore);

  return (
    <div
      className={css({
        display: "flex",
        flexDir: "column",
        gap: 4,
        width: "100%",
        maxWidth: "900px",
        marginX: "auto",
      })}
    >
      <form
        className={css({
          display: "flex",
          gap: 4,
        })}
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          className={css({
            border: "1px solid token(colors.gray.300)",
            padding: 2,
            width: "320px",
            height: "50px",
            fontSize: "sm",
          })}
          id="searchField"
          placeholder="Start typing to search.."
          required
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />

        <select
          className={css({
            border: "1px solid token(colors.gray.300)",
            fontSize: "sm",
            color: "gray.500",
            padding: 2,
            height: "50px",
            textAlign: "center",
          })}
          id="selectOption"
          name="select-opt"
          value={selectedValue}
          onChange={(event) => setSelectedValue(event.target.value)}
        >
          <option value="users"> Users</option>
          <option value="repositories"> Repositories</option>
        </select>
      </form>

      {/* Loading and error states */}
      {loading && (
        <div
          className={css({
            color: "gray.600",
            fontSize: "md",
            textAlign: "center",
          })}
        >
          Loading...
        </div>
      )}
      {error && (
        <div
          className={css({
            color: "red.500",
            fontSize: "md",
            textAlign: "center",
          })}
        >
          {error}
        </div>
      )}

      {/* diplay api search results */}
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 4,
          marginTop: 4,
          marginBottom: 4,
          "@media (max-width: 768px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
        })}
      >
        {results.map((item, idx) => {
          const isLast = idx === results.length - 1;
          if (selectedValue === "users" && "avatar_url" in item) {
            return (
              <UserCard
                key={item.id}
                user={item as UserResult}
                refProp={isLast ? lastElementRef : undefined}
              />
            );
          } else if ("full_name" in item) {
            return (
              <RepoCard
                key={item.id}
                repo={item as RepoResult}
                refProp={isLast ? lastElementRef : undefined}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default SearchForm;
