import { useQuery } from '@tanstack/react-query'

import { readAreas } from '../api/area'

export const useReadAreas = () => {
	return useQuery({
		queryKey: ['areas'],
		queryFn: readAreas,
	})
}
