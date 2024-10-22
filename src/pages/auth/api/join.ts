import { SignupCreatePayloadDto } from '@type/data-contracts'

import axiosInstance from '@lib/instance'

const PATH = '/auth'

// Read products
export const signup = (parmas: SignupCreatePayloadDto) => {
	return axiosInstance.post(`${PATH}/signup`, { ...parmas }).then((response) => response.data)
}
