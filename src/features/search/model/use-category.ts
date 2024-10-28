import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from 'src/shared/const'

import { readCategories } from '../api/category'

export const useReadCategories = () => {
	return useQuery({
		queryKey: [QUERY_KEY.CATEGORY],
		queryFn: readCategories,
	})
}
