import { ProductDetailDataDto } from '@type/data-contracts'

import axiosInstance from '@lib/instance'

const PATH = '/product'

// Read products
export const readProduct = (id: number): Promise<ProductDetailDataDto> => {
	return axiosInstance.get(`${PATH}/${id}`).then((response) => response.data)
}
