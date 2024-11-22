import { Auth } from '@type/auth-route'
import { AuthListDataDto, AuthUpdatePayloadDto } from '@type/data-contracts'

import axiosInstance from '@lib/instance'

const PATH = '/auth'

// Read profile
export const readAuth = (): Promise<AuthListDataDto> => {
	// return axiosInstance.get(PATH, { headers: { Authorization: `Bearer ${token}` } }).then((response) => response.data)
	return axiosInstance.get(PATH).then((response) => response.data)
}

// Update a profile
export const updateAuth = (params: Auth.AuthPartialUpdate.RequestBody) => {
	return axiosInstance.patch(PATH, { params }).then((response) => response.data)
}

// Update an area
export const updateAuthArea = (areaIds: number[]): Promise<AuthUpdatePayloadDto> => {
	return axiosInstance.put(PATH, { areaIds }).then((response) => response.data)
}
