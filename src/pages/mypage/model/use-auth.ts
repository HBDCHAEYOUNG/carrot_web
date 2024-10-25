import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEY } from 'src/shared/const'

import { readAuth, updateAuthArea, updateAuthNickname } from '../api/auth'

export const useReadAuth = () => {
	return useQuery({
		queryKey: [QUERY_KEY.AUTH],
		queryFn: () => readAuth(),
	})
}

export const useUpdateAuth = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (nickname: string) => updateAuthNickname(nickname),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.AUTH] })
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
