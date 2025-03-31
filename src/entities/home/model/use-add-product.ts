import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ProductCreateDataDto } from '@type/data-contracts'
import { QUERY_KEY } from 'src/shared/const'

import { addProduct } from '../api/add-product'

export const useAddProduct = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (params: ProductCreateDataDto) => addProduct(params),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.ADD_PRODUCT] })
		},
		onError: (error) => {
			console.error('Add product failed:', error)
			throw error // Re-throw the error to be caught in the component
		},
	})
}
