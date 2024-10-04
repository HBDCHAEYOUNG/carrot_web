import { Footer } from '@app/layouts'
import { useHeaderStore } from '@store/headerStore'
import { useEffect } from 'react'
import { FaUserLarge } from 'react-icons/fa6'
import { IoSettingsOutline } from 'react-icons/io5'

import { ButtonBasic } from '@ui/index'

const auth = {
	token: 'string',
	email: 'string',
	nickname: '우혁이짱',
	profile: '',
	area: [
		{
			id: 1,
			name: '서울특별시',
		},
		{
			id: 2,
			name: '경기도',
		},
	],
	notice: {
		type: 'activity',
		message: 'string',
		isRead: true,
		createdAt: '2024-10-04T05:38:03.107Z',
	},
	noticeKeyword: {
		keyword: 'string',
		createdAt: '2024-10-04T05:38:03.107Z',
	},
}

export function Mypage() {
	const { toggleHeader } = useHeaderStore()

	useEffect(() => {
		toggleHeader(false)
		return () => toggleHeader(true)
	}, [toggleHeader])

	return (
		<>
			<header className="flex w-full justify-end py-6 common-padding">
				<IoSettingsOutline className="size-6" />
			</header>
			<section className="flex flex-col gap-4 common-padding">
				<div className="flex items-center gap-2">
					<picture className="size-10 rounded-full bg-gray-01 flex-center">
						{auth.profile ? <img src={auth.profile} alt={auth.nickname} /> : <FaUserLarge className="size-6 fill-brand-01" />}
					</picture>
					<h2 className="bold text-xl">{auth.nickname}</h2>
				</div>
				<ButtonBasic>프로필 수정</ButtonBasic>
			</section>
			<Footer />
		</>
	)
}
