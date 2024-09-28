import { create } from 'zustand'

interface Header {
	// 변수값만
	isHeader: boolean
}

interface HeaderProps extends Header {
	// 함수들만
	toggleHeader: (toogle: boolean) => void
}

const INIT = {
	// 변수값만
	isHeader: true,
}

export const useHeaderStore = create<HeaderProps>((set) => ({
	...INIT,

	toggleHeader: (toogle: boolean) => set(() => ({ isHeader: toogle })),
}))
