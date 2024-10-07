import { create } from 'zustand'

interface Search {
	// 변수값만
	searchMode: boolean
}

interface SearchProps extends Search {
	// 함수들만
	setSearchMode: () => void
}

const INIT = {
	// 변수값만
	searchMode: false,
}

export const useSearchStore = create<SearchProps>((set) => ({
	...INIT,

	setSearchMode: () => set((state) => ({ searchMode: !state.searchMode })),
}))
