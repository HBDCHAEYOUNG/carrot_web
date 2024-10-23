import { Auth } from '@type/auth-route'

import axiosInstance from '@lib/instance'

const PATH = '/auth'

// Read products
export const login = (parmas: Auth.AuthCreate.RequestBody) => {
	return axiosInstance.post(PATH, { ...parmas }).then((response) => response.data)
}

export const logout = () => {
	return axiosInstance.delete(PATH).then((response) => response.data)
}
