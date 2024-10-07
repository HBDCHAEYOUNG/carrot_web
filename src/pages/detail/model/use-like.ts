import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { QUERY_KEY } from 'src/shared/const/querykey'

import { createProduct, deleteProduct, getProducts } from '../api/like'

export const useGetLike = () => {
	return useQuery({
		queryKey: [QUERY_KEY.LIKE],
		queryFn: getProducts,
	})
}

export const useCreateLike = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (id: number) => createProduct(id),
		onSuccess: ({ id }) => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCTS] })
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCT, Number(id)] })
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.LIKE] })
		},
	})
}

export const useDeleteLike = () => {
	const queryClient = useQueryClient()
	const { id } = useParams()

	return useMutation({
		mutationFn: (id: number) => deleteProduct(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCTS] })
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCT, Number(id)] })
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.LIKE] })
		},
	})
}
