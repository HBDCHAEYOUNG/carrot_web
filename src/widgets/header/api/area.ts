import { AreaListDataDto } from '@type/data-contracts'

import axiosInstance from '@lib/instance'

const PATH = '/area'

// Read areas
export const readAreas = (): Promise<AreaListDataDto['data']> => {
	return axiosInstance.get(PATH).then((response) => response.data.data)
}
