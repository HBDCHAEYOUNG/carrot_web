import { SignupCreatePayloadDto } from '@type/data-contracts'

import axiosInstance from '@lib/instance'

const PATH = '/auth'

// Read products
export const signup = (parmas: SignupCreatePayloadDto) => {
	console.log(parmas)
	return axiosInstance.post(`${PATH}/signup`, { ...parmas }).then((response) => response.data)
}
