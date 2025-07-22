import type {
  RepoResult,
  SearchType,
  UserResult,
} from "../../../shared/types/type";
import { css } from "../../../../styled-system/css";
import RepoCard from "../repo-content/RepoCard";
import UserCard from "../user/UserCard";

interface SearchFormProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  selectedValue: SearchType;
  setSelectedValue: (value: SearchType) => void;
  results: (UserResult | RepoResult)[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  lastElementRef: React.RefObject<HTMLDivElement | null>;
  isFetchingNextPage: boolean;
}

function SearchForm({
  searchInput,
  setSearchInput,
  selectedValue,
  setSelectedValue,
  results,
  isLoading,
  isError,
  error,
  lastElementRef,
  isFetchingNextPage,
}: SearchFormProps) {
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
          onChange={(event) =>
            setSelectedValue(event.target.value as SearchType)
          }
        >
          <option value="users"> Users</option>
          <option value="repositories"> Repositories</option>
        </select>
      </form>

      {/* Loading and error states */}
      {isLoading && (
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
      {isError && (
        <div
          className={css({
            color: "red.500",
            fontSize: "md",
            textAlign: "center",
          })}
        >
          {error?.message || "Something went wrong"}
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
      {isFetchingNextPage && (
        <div
          className={css({
            color: "gray.600",
            fontSize: "md",
            textAlign: "center",
          })}
        >
          Loading more...
        </div>
      )}
    </div>
  );
}

export default SearchForm;
