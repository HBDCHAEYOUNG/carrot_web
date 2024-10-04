import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { createProduct, deleteProduct, readProducts, updateProduct } from '../api/auth'

export const useReadProducts = () => {
	return useQuery({
		queryKey: ['products'],
		queryFn: readProducts,
	})
}

export const useReadProduct = (id: number) => {
	return useQuery({
		queryKey: ['products'],
		queryFn: readProducts,
		enabled: !!id,
	})
}

export const useCreateProduct = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createProduct,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['products'] })
		},
	})
}

export const useUpdateProduct = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: updateProduct,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['products'] })
		},
	})
}

export const useDeleteProduct = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: deleteProduct,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['products'] })
		},
	})
}
