import { Footer } from '@app/layouts'
import { useAuthStore } from '@store/authStore'
import { useHeaderStore } from '@store/headerStore'
import { useEffect } from 'react'
import { FaUserLarge } from 'react-icons/fa6'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { TfiHeart as heartIcon, TfiReceipt as listIcon } from 'react-icons/tfi'

import { LikeProducts } from '@widgets/mypage'
import { EditProfile } from '@widgets/mypage/ui/edit-profile'

import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger } from '@ui/index'

import { useReadAuth } from '../model/use-auth'

export function Mypage() {
	const { toggleHeader } = useHeaderStore()
	const { token } = useAuthStore()
	const { data: auth } = useReadAuth(token)

	useEffect(() => {
		toggleHeader(false)
		return () => toggleHeader(true)
	}, [toggleHeader])

	return (
		<>
			<header className="flex w-full justify-end py-6 common-padding">
				<IoSettingsOutline className="size-6 cursor-pointer" />
			</header>
			<section className="flex flex-col gap-4 common-padding">
				<div className="flex items-center gap-2">
					<picture className="size-10 overflow-hidden rounded-full bg-gray-01 flex-center">
						{auth?.profile ? <img src={auth.profile} alt={auth.nickname} /> : <FaUserLarge className="size-6 fill-white" />}
					</picture>
					<h2 className="text-2xl font-semibold">{auth?.nickname}</h2>
				</div>
				<EditProfile />
			</section>
			<section className="flex flex-col gap-4 py-6 common-padding">
				<h3 className="text-lg font-bold">나의 거래</h3>

				{[
					{ icon: heartIcon, title: '관심목록', content: <LikeProducts /> },
					{ icon: listIcon, title: '판매내역', content: <LikeProducts /> },
					// { icon: bagIcon, title: '구매내역', content: <PurchaseHistory /> },
				].map(({ icon: Icon, title, content }) => (
					<Drawer key={title}>
						<DrawerTrigger className="flex cursor-pointer items-center gap-2">
							<Icon className="size-6" />
							<span className="text-lg">{title}</span>
						</DrawerTrigger>
						<DrawerContent className="h-full rounded-none">
							<DrawerHeader className="flex justify-center border-b border-gray-01 pb-6">
								<DrawerClose>
									<MdOutlineArrowBackIos className="fixed left-4 top-11 size-6" />
								</DrawerClose>
								<h3 className="text-lg font-bold">{title}</h3>
							</DrawerHeader>
							{content}
						</DrawerContent>
					</Drawer>
				))}
			</section>
			<Footer />
		</>
	)
}
