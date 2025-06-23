import { useState } from "react";
import { css } from "../styled-system/css";


function SearchField() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedValue, setSelectedValue] = useState("users");


  return (
      <form
        className={css({
          display: "flex",
          gap: 4,
        })}
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
  );
}

export default SearchField;
