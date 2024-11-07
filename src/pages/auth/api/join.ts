import { SignupCreatePayloadDto } from '@type/data-contracts'

import axiosInstance from '@lib/instance'

const PATH = '/auth'

// Read products
export const signup = (parmas: SignupCreatePayloadDto) => {
	console.log(parmas)
	return axiosInstance.post(`${PATH}/signup`, { ...parmas }).then((response) => response.data)
}

export const checkEmail = (email: string) => {
	return axiosInstance.post(`${PATH}/email-check`, { email }).then((response) => response.data)
}

export const checkNickname = (nickname: string) => {
	return axiosInstance.post(`${PATH}/nickname-check`, { nickname }).then((response) => response.data)
}
