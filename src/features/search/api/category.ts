import { CategoryListDataDto } from '@type/data-contracts'

import axiosInstance from '@lib/instance'

const PATH = '/category'

export const readCategories = (): Promise<CategoryListDataDto['data']> => {
	return axiosInstance.get(PATH).then((response) => response.data.data)
}
