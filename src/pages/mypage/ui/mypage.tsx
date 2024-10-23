import { Footer } from '@app/layouts'
import { useHeaderStore } from '@store/headerStore'
import { useEffect } from 'react'
import { FaUserLarge } from 'react-icons/fa6'
import { TfiHeart as heartIcon, TfiReceipt as listIcon } from 'react-icons/tfi'

import { SettingDrawer } from '@entities/mypage'

import { LikeProducts } from '@widgets/mypage'
import { EditProfile } from '@widgets/mypage/ui/edit-profile'
import { SalesProducts } from '@widgets/mypage/ui/sales-products'

import { DeallistDrawer } from '@ui/index'

import { useReadAuth } from '../model/use-auth'

export function Mypage() {
	const { data: auth } = useReadAuth()

	const { toggleHeader } = useHeaderStore()

	useEffect(() => {
		toggleHeader(false)
		return () => toggleHeader(true)
	}, [toggleHeader])

	return (
		<>
			<header className="flex w-full justify-end py-6 common-padding">
				<SettingDrawer />
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
					{ icon: listIcon, title: '판매내역', content: <SalesProducts /> },
					// { icon: bagIcon, title: '구매내역', content: <PurchaseHistory /> },
				].map(({ icon, title, content }) => (
					<DeallistDrawer key={title} icon={icon} title={title} content={content} />
				))}
			</section>

			<Footer />
		</>
	)
}
