import { useQuery } from '@tanstack/react-query'

import { readProduct } from '../api/product'

export const useReadProduct = (id: number) => {
	return useQuery({
		queryKey: ['product', id],
		queryFn: () => readProduct(id),
		enabled: !!id,
	})
}
