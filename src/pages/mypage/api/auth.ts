import { AuthListDataDto, AuthPartialUpdateDataDto } from '@type/data-contracts'

import axiosInstance from '@lib/instance'

const PATH = '/auth'

// Read profile
export const readAuth = (token: string): Promise<AuthListDataDto> => {
	return axiosInstance.get(PATH, { headers: { Authorization: `Bearer ${token}` } }).then((response) => response.data)
}

// Update a profile
export const updateAuth = (token: string, nickname: string): Promise<AuthPartialUpdateDataDto> => {
	return axiosInstance.patch(PATH, { nickname }, { headers: { Authorization: `Bearer ${token}` } }).then((response) => response.data)
}

// // Create a new Product
// export const createAuth = (): Promise<SignupCreateDataDto> => {
// 	return axiosInstance.post(`${PATH}/signup`).then((response) => response.data)
// }

// // Delete an Product
// export const deleteProduct = (id: number): Promise<void> => {
// 	return axiosInstance.delete(`${PATH}/${id}`)
// }
