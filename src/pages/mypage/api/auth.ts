import { AuthListDataDto } from '@type/data-contracts'

import axiosInstance from '@lib/instance'

const PATH = '/auth'

// Read products
export const readAuth = (token: string): Promise<AuthListDataDto> => {
	return axiosInstance.get(PATH, { headers: { Authorization: `Bearer ${token}` } }).then((response) => response.data)
}

// // Create a new Product
// export const createAuth = (): Promise<SignupCreateDataDto> => {
// 	return axiosInstance.post(`${PATH}/signup`).then((response) => response.data)
// }

// // Update an Product
// export const updateProduct = ({ id, name }: { id: number; name: string }): Promise<ProductListDataDto['products']> => {
// 	return axiosInstance.put(`${PATH}/${id}`, { name }).then((response) => response.data)
// }

// // Delete an Product
// export const deleteProduct = (id: number): Promise<void> => {
// 	return axiosInstance.delete(`${PATH}/${id}`)
// }
