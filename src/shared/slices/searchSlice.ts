import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type SearchResult = {
  term: string;
  entity: string;
  results: unknown[];
};

type SearchState = {
  cache: Record<string, SearchResult>;
};

const initialState: SearchState = {
  cache: {},
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    cacheResults: (
      state,
      action: PayloadAction<{ term: string; entity: string; results: unknown[] }>
    ) => {
      const { term, entity, results } = action.payload;
      state.cache[`${entity}:${term}`] = { term, entity, results };
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
