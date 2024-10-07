import { Like } from '@type/like-route'

import axiosInstance from '@lib/instance'

const PATH = '/like'

// Get products
export const getProducts = (): Promise<Like.LikeList.ResponseBody> => {
	return axiosInstance.get(PATH).then((response) => response.data)
}

// Post products
export const createProduct = (id: number): Promise<Like.LikeCreate.ResponseBody> => {
	return axiosInstance.post(`${PATH}/${id}`).then((response) => response.data)
}

// Delete an Product
export const deleteProduct = (id: number): Promise<Like.LikeDelete.ResponseBody> => {
	return axiosInstance.delete(`${PATH}/${id}`).then((response) => response.data)
}
