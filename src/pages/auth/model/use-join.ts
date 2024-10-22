import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SignupCreatePayloadDto } from '@type/data-contracts'
import { QUERY_KEY } from 'src/shared/const'

import { signup } from '../api/join'

export const useJoin = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (params: SignupCreatePayloadDto) => signup(params),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.JOIN] })
		},
		onError: (error) => {
			console.error('Join failed:', error)
			throw error // Re-throw the error to be caught in the component
		},
	})
}
