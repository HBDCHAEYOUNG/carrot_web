import { AuthListDataDto, AuthPartialUpdatePayloadDto, AuthUpdatePayloadDto } from '@type/data-contracts'

import axiosInstance from '@lib/instance'

const PATH = '/auth'

// Read profile
export const readAuth = (token: string): Promise<AuthListDataDto> => {
	return axiosInstance.get(PATH, { headers: { Authorization: `Bearer ${token}` } }).then((response) => response.data)
}

// Update a profile
export const updateAuthNickname = (token: string, nickname: string): Promise<AuthPartialUpdatePayloadDto> => {
	return axiosInstance.patch(PATH, { nickname }, { headers: { Authorization: `Bearer ${token}` } }).then((response) => response.data)
}

// Update an area
export const updateAuthArea = (token: string, areaIds: number[]): Promise<AuthUpdatePayloadDto> => {
	return axiosInstance.put(PATH, { areaIds }, { headers: { Authorization: `Bearer ${token}` } }).then((response) => response.data)
}
