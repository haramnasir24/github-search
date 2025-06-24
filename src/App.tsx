import { useRef, useState } from "react";
import { css } from "../styled-system/css";
import Header from "./Header";
import SearchForm from "./SearchForm";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggleDarkMode = (enabled: boolean) => {
    setIsDarkMode(enabled);
    if (containerRef.current) {
      if (enabled) {
        containerRef.current.setAttribute("data-color-mode", "dark");
      } else {
        containerRef.current.removeAttribute("data-color-mode");
      }
    }
  };

  return (
    <div
      className={css({
        display: "flex",
        flexDir: "column",
        gap: "4",
        fontFamily: "Arial",
        width: "100%",
        maxWidth: "900px",
        marginX: "auto",
        paddingTop: 8,
        bg: "bg",
        color: "text",
      })}
    >
      <Header isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />
      <SearchForm />
    </div>
  );
}

export default App;
