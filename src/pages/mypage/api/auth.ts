import { AuthListDataDto, AuthPartialUpdatePayloadDto, AuthUpdatePayloadDto } from '@type/data-contracts'

import axiosInstance from '@lib/instance'

const PATH = '/auth'

// Read profile
export const readAuth = (): Promise<AuthListDataDto> => {
	// return axiosInstance.get(PATH, { headers: { Authorization: `Bearer ${token}` } }).then((response) => response.data)
	return axiosInstance.get(PATH).then((response) => response.data)
}

// Update a profile
export const updateAuthNickname = (nickname: string): Promise<AuthPartialUpdatePayloadDto> => {
	return axiosInstance.patch(PATH, { nickname }).then((response) => response.data)
}

// Update an area
export const updateAuthArea = (areaIds: number[]): Promise<AuthUpdatePayloadDto> => {
	return axiosInstance.put(PATH, { areaIds }).then((response) => response.data)
}
