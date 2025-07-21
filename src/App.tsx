import { useEffect, useState } from "react";
import { css } from "../styled-system/css";
import Header from "./components/composites/common/Header";
import SearchForm from "./components/composites/search/SearchForm";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedValue = window.localStorage.getItem("color-mode");
    return savedValue !== null ? JSON.parse(savedValue) : false;
  });
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-color-mode",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  useEffect(
    () => window.localStorage.setItem("color-mode", isDarkMode.toString()),
    [isDarkMode]
  );

  const handleToggleDarkMode = (enabled: boolean) => {
    setIsDarkMode(enabled);
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
