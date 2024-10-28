import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from 'src/shared/const'

import { readAreas } from '../api/area'

export const useReadAreas = () => {
	return useQuery({
		queryKey: [QUERY_KEY.AREA],
		queryFn: readAreas,
	})
}
