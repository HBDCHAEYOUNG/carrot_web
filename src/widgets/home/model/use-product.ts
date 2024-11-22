import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Product } from '@type/product-route'
import { QUERY_KEY } from 'src/shared/const'

import { createProduct, deleteProduct, readProducts, readSales, updateProduct } from '../api/product'

export const useReadProducts = (params: Product.ProductList.RequestQuery) => {
	console.log(params)
	return useQuery({
		queryKey: [QUERY_KEY.PRODUCTS, params],
		queryFn: () => readProducts(params),
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

export const useReadSales = (token: string) => {
	return useQuery({
		queryKey: [QUERY_KEY.SALES],
		queryFn: () => readSales(),
		enabled: !!token,
	})
}
