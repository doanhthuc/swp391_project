import create from "zustand";
import { persist } from "zustand/middleware";

const store = (set, get) => ({
  // Variables
  listOfSearch: [],
  // Functions
  addSearch: (title) => set(() => ({ listOfSearch: [...get().listOfSearch, title] })),
  removeSearch: (title) => {
    const lst = get().listOfSearch;
    lst.filter((x) => x !== title);
    return set(() => ({ listOfSearch: lst }));
  },
});

const searchStore = create(persist(store));

export default searchStore;
