import { css } from "../styled-system/css";
import Header from "./Header";
import SearchForm from "./SearchForm";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div
      className={css({
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "4",
        fontFamily: "Arial",
      })}
    >
      <Header />
      <QueryClientProvider client={queryClient}>
        <SearchForm />
      </QueryClientProvider>
    </div>
  );
}

export default App;
