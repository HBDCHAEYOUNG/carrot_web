import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEY } from 'src/shared/const'

import { createProduct, deleteProduct, readProducts, updateProduct } from '../api/product'

export const useReadProducts = () => {
	return useQuery({
		queryKey: [QUERY_KEY.PRODUCTS],
		queryFn: readProducts,
	})
}

export const useReadProduct = (id: number) => {
	return useQuery({
		queryKey: [QUERY_KEY.PRODUCTS],
		queryFn: readProducts,
		enabled: !!id,
	})
}

export const useCreateProduct = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createProduct,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCTS] })
		},
	})
}

export const useUpdateProduct = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: updateProduct,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCTS] })
		},
	})
}

export const useDeleteProduct = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: deleteProduct,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCTS] })
		},
	})
}
