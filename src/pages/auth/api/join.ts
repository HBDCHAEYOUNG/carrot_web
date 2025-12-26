import { Auth } from '@type/auth-route'

import axiosInstance from '@lib/instance'

const PATH = '/auth'

export const signup = (parmas: Auth.SignupCreate.RequestBody) => {
	return axiosInstance.post(`${PATH}/signup`, { ...parmas }).then((response) => response.data)
}

export const checkEmail = (params: Auth.EmailCheckCreate.RequestBody) => {
	return axiosInstance.post(`${PATH}/email-check`, params).then((response) => response.data)
}

export const checkNickname = (params: Auth.NicknameCheckCreate.RequestBody) => {
	return axiosInstance.post(`${PATH}/nickname-check`, params).then((response) => response.data)
}
