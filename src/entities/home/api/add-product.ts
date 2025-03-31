import { ProductCreateDataDto } from '@type/data-contracts'

import axiosInstance from '@lib/instance'

const PATH = '/product'

// Read products
export const addProduct = (parmas: ProductCreateDataDto) => {
	console.log(parmas)
	return axiosInstance.post(PATH, { ...parmas }).then((response) => response.data)
}
