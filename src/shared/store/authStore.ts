import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Auth {
	// 변수값만
	isLogin: boolean
	token: string
}

interface AuthProps extends Auth {
	// 함수들만
	setLogin: (token: string) => void
	setLogout: () => void
}

const INIT = {
	// 변수값만
	isLogin: false,
	token: '',
}

export const useAuthStore = create(
	persist<AuthProps>(
		(set) => ({
			...INIT,

			setLogin: (token) => set(() => ({ isLogin: true, token })),
			setLogout: () => set({ ...INIT }),
		}),
		{
			name: 'auth',
		},
	),
)
