import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { createArea, deleteArea, readAreas, updateArea } from '../api/area'

export const useReadAreas = () => {
	return useQuery({
		queryKey: ['areas'],
		queryFn: readAreas,
	})
}

export const useReadArea = (id: number) => {
	return useQuery({
		queryKey: ['areas'],
		queryFn: readAreas,
		enabled: !!id,
	})
}

export const useCreateArea = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createArea,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['areas'] })
		},
	})
}

export const useUpdateArea = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: updateArea,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['areas'] })
		},
	})
}

export const useDeleteArea = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: deleteArea,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['areas'] })
		},
	})
}
