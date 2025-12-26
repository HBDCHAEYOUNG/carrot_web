import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEY } from 'src/shared/const'

import { readAuth, updateAuth, updateAuthArea } from '../api/auth'

export const useReadAuth = () => {
	return useQuery({
		queryKey: [QUERY_KEY.AUTH],
		queryFn: () => readAuth(),
	})
}

export const useUpdateAuth = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: updateAuth,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.AUTH] })
		},
		onError: (error) => {
			console.log(error)
		},
	})
}

export const useUpdateAuthArea = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (areaIds: number[]) => updateAuthArea(areaIds),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.AUTH] })
		},
	})
}
