import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEY } from 'src/shared/const'

import { login } from '../api/login'

export const useLogin = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: login,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.LOGIN] })
		},
		onError: (error) => {
			console.error('Login failed:', error)
			throw error // Re-throw the error to be caught in the component
		},
	})
}
