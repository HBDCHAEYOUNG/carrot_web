import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SearchHistory {
	// 변수값만
	searchHistory: string[]
}

interface SearchHistoryProps extends SearchHistory {
	// 함수들만
	setInit: () => void
	setSearchHistory: (item: string) => void
	setSearchRemove: (item: string) => void
}

const INIT = {
	// 변수값만
	searchHistory: [],
}

export const useSearchHistoryStore = create(
	persist<SearchHistoryProps>(
		(set) => ({
			...INIT,

			setInit: () => set(INIT),
			setSearchHistory: (item: string) => set(({ searchHistory }) => ({ searchHistory: [...searchHistory, item] })),
			setSearchRemove: (item: string) => {
				set(({ searchHistory }) => ({ searchHistory: searchHistory.filter((historyItem) => historyItem !== item) }))
			},
		}),
		{
			name: 'history',
		},
	),
)
