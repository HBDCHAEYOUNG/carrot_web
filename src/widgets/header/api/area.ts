import { AreaListDataDto } from '@type/data-contracts'

import axiosInstance from '@lib/instance'

const PATH = '/area'

// Read areas
export const readAreas = (): Promise<AreaListDataDto['data']> => {
	return axiosInstance.get(PATH).then((response) => response.data.data)
}

// Create a new area
export const createArea = (newArea: { name: string }): Promise<AreaListDataDto['data']> => {
	return axiosInstance.post(PATH, newArea).then((response) => response.data)
}

// Update an area
export const updateArea = ({ id, name }: { id: number; name: string }): Promise<AreaListDataDto['data']> => {
	return axiosInstance.put(`${PATH}/${id}`, { name }).then((response) => response.data)
}

// Delete an area
export const deleteArea = (id: number): Promise<void> => {
	return axiosInstance.delete(`${PATH}/${id}`)
}
