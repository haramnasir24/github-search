import { css } from "../styled-system/css";
import githubLogo from "./assets/github.jpg";

function Header() {
  return (
    <div
      className={css({
        display: "flex",
        flexDir: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "4",
      })}
    >
      <img
        src={githubLogo}
        alt="GitHub Logo"
        className={css({ width: "50px", height: "50px" })}
      />
      <div className={css({ display: "flex", flexDir: "column" })}>
        <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>
          GitHub Searcher
        </h1>
        <p className={css({ color: "grey" })}>
          Search users or repositories below
        </p>
      </div>
    </div>
  );
}

export default Header;
