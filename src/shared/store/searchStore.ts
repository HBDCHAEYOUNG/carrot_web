import { create } from "zustand";

interface StoreProps {
  searchMode: boolean;
  toggleSearchMode: () => void;
}

const useSearchStore = create<StoreProps>((set) => ({
  searchMode: false,

  toggleSearchMode: () => set((state) => ({ searchMode: !state.searchMode })),
}));

export default useSearchStore;
