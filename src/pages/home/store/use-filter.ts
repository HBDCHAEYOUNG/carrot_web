import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Filter {
	areaFilter: string
	categoryFilter: string
	priceFilter: string
}

interface FilterProps extends Filter {
	setAreaFilter: (item: string) => void
	setCategoryFilter: (item: string) => void
	setPriceFilter: (min: string, max: string) => void
}

const INIT = {
	areaFilter: '',
	categoryFilter: '',
	priceFilter: '',
}

export const useFilterStore = create(
	persist<FilterProps>(
		(set) => ({
			...INIT,
			setAreaFilter: (item: string) => set({ areaFilter: item }),
			setCategoryFilter: (item: string) => set({ categoryFilter: item }),
			setPriceFilter: (min: string, max: string) => set({ priceFilter: `${min}~${max}` }),
		}),
		{ name: 'filter' },
	),
)
