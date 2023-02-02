import { create } from "zustand";

export const useSearchResultsStore = create((set, get) => ({
  searchResults: [],
  setSearchResults: (results) => set({ searchResults: results }),
}));

