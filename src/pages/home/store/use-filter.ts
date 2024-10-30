import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Filter {
	areaFilter: string
	categoryFilter: string
	minPrice: string
	maxPrice: string
}

interface FilterProps extends Filter {
	setAreaFilter: (item: string) => void
	setCategoryFilter: (item: string) => void
	setPriceFilter: (minPrice: string, maxPrice: string) => void
}

const INIT = {
	areaFilter: '',
	categoryFilter: '',
	minPrice: '',
	maxPrice: '',
}

export const useFilterStore = create(
	persist<FilterProps>(
		(set) => ({
			...INIT,
			setAreaFilter: (item: string) => set({ areaFilter: item }),
			setCategoryFilter: (item: string) => set({ categoryFilter: item }),
			setPriceFilter: (min: string, max: string) => set({ minPrice: min, maxPrice: max }),
		}),
		{ name: 'filter' },
	),
)
