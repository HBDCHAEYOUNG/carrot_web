import { create } from 'zustand'

interface StoreProps {
	searchMode: boolean
	action: {
		toggleSearchMode: () => void
	}
}

const useSearchStore = create<StoreProps>((set) => ({
	searchMode: false,

	action: {
		toggleSearchMode: () => set(({ searchMode }) => ({ searchMode: !searchMode })),
	},
}))

export default useSearchStore
