import { css } from "../styled-system/css";
import Header from "./Header";
import SearchForm from "./SearchForm";

function App() {
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
      })}
    >
      <Header />
      <SearchForm />
    </div>
  );
}

export default App;
