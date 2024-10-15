import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEY } from 'src/shared/const'

import { readAuth, updateAuth } from '../api/auth'

export const useReadAuth = (token: string) => {
	return useQuery({
		queryKey: [QUERY_KEY.AUTH],
		queryFn: () => readAuth(token),
		enabled: !!token,
	})
}

export const useUpdateAuth = (token: string) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (nickname: string) => updateAuth(token, nickname),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.AUTH] })
		},
	})
}

// export const useReadProduct = (id: number) => {
// 	return useQuery({
// 		queryKey: ['products'],
// 		queryFn: readProducts,
// 		enabled: !!id,
// 	})
// }

// export const useCreateProduct = () => {
// 	const queryClient = useQueryClient()

// 	return useMutation({
// 		mutationFn: createProduct,
// 		onSuccess: () => {
// 			queryClient.invalidateQueries({ queryKey: ['products'] })
// 		},
// 	})
// }

// export const useDeleteProduct = () => {
// 	const queryClient = useQueryClient()

// 	return useMutation({
// 		mutationFn: deleteProduct,
// 		onSuccess: () => {
// 			queryClient.invalidateQueries({ queryKey: ['products'] })
// 		},
// 	})
// }
