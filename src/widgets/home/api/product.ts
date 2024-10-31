import { ProductListDataDto, SalesListDataDto } from '@type/data-contracts'

import axiosInstance from '@lib/instance'

const PATH = '/product'

// Read productsList
export const readProducts = (keyword: string, area: string, category: string, minPrice: number, maxPrice: number) => {
	return axiosInstance.get(PATH, { params: { keyword, area, category, minPrice, maxPrice } }).then((response) => response.data)
}

// Create a new Product
export const createProduct = (newProduct: { name: string }): Promise<ProductListDataDto['products']> => {
	return axiosInstance.post(PATH, newProduct).then((response) => response.data)
}

// Update an Product
export const updateProduct = ({ id, name }: { id: number; name: string }): Promise<ProductListDataDto['products']> => {
	return axiosInstance.put(`${PATH}/${id}`, { name }).then((response) => response.data)
}

// Delete an Product
export const deleteProduct = (id: number): Promise<void> => {
	return axiosInstance.delete(`${PATH}/${id}`)
}

export const readSales = (): Promise<SalesListDataDto> => {
	// return axiosInstance.get(`${PATH}/sales?status=sale`, { headers: { Authorization: `Bearer ${token}` } }).then((response) => response.data)
	return axiosInstance.get(`${PATH}/sales?status=sale`).then((response) => response.data)
}
