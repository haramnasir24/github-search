import { useEffect, useState } from "react";
import { css } from "../styled-system/css";
import Header from "./Header";
import SearchForm from "./SearchForm";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (isDarkMode) {
        body.setAttribute('data-color-mode', 'dark');
      } else {
        body.removeAttribute('data-color-mode');
      }
    }
  }, [isDarkMode]);

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
        bg: 'bg', 
        color: 'text'
      })}
    >
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <SearchForm />
    </div>
  );
}

export default App;
