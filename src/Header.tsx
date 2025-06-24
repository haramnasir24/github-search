import { css } from "../styled-system/css";
import githubLogo from "./assets/github.png";
import ToggleButton from "./components/ToggleButton";

type HeaderProps = {
  isDarkMode: boolean;
  onToggleDarkMode: (enabled: boolean) => void;
};

function Header({ isDarkMode, onToggleDarkMode }: HeaderProps) {
  return (
    <header
      className={css({
        display: "flex",
        flexDir: "row",
        gap: "4",
        width: "100%",
        maxWidth: "900px",
        marginX: "auto",
      })}
    >
      <img
        src={githubLogo}
        alt="GitHub Logo"
        className={css({ width: "50px", height: "50px" })}
      />
      <section className={css({ display: "flex", flexDir: "column" })}>
        <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>
          GitHub Searcher
        </h1>
        <p className={css({ color: "grey" })}>
          Search users or repositories below
        </p>
      </section>
      <ToggleButton isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
    </header>
  );
}

export default Header;
