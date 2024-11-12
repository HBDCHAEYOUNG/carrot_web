import { Footer } from '@app/layouts'
import { useLogout } from '@pages/auth'
import { useAuthStore } from '@store/authStore'
import { TfiHeart as heartIcon, TfiReceipt as listIcon } from 'react-icons/tfi'
import { useNavigate } from 'react-router-dom'

import { LikeProducts } from '@widgets/mypage'
import { EditProfile } from '@widgets/mypage/ui/edit-profile'
import { SalesProducts } from '@widgets/mypage/ui/sales-products'

import { ButtonBasic, DeallistDrawer, Profile } from '@ui/index'

import { useReadAuth } from '../model/use-auth'

export function Mypage() {
	const { setLogout } = useAuthStore()

	const router = useNavigate()

	const { data: auth } = useReadAuth()
	const { mutateAsync: logout } = useLogout()
	console.log(auth)
	const onClickLogout = () => {
		setLogout()
		logout()
		router('/')
	}

	return (
		<>
			<section className="flex flex-col gap-4 pt-14 common-padding">
				<div className="flex items-center justify-between gap-2">
					<Profile className="size-16" img={auth?.profile} name={auth?.nickname} area={auth?.area[0]?.name} />
					<ButtonBasic className="w-fit" type="button" onClick={onClickLogout}>
						로그아웃
					</ButtonBasic>
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
