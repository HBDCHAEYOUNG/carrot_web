import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEY } from 'src/shared/const'

import { checkEmail, checkNickname, signup } from '../api/join'

export const useJoin = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: signup,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.JOIN] })
		},
		onError: (error) => {
			console.error('Join failed:', error)
			throw error
		},
	})
}

export const useCheckEmail = () => {
	return useMutation({
		mutationFn: checkEmail,
		onError: (error) => {
			console.error('Check email failed:', error)
			throw error
		},
	})
}

export const useCheckNickname = () => {
	return useMutation({
		mutationFn: checkNickname,
		onError: (error) => {
			console.error('Check nickname failed:', error)
			throw error
		},
	})
}
