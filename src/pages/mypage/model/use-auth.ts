import { useQuery } from '@tanstack/react-query'

import { readAuth } from '../api/auth'

export const useReadAuth = (token: string) => {
	return useQuery({
		queryKey: ['auth'],
		queryFn: () => readAuth(token),
		enabled: !!token,
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

// export const useUpdateProduct = () => {
// 	const queryClient = useQueryClient()

// 	return useMutation({
// 		mutationFn: updateProduct,
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
