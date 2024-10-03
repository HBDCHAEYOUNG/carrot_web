import { useHeaderStore } from '@store/headerStore'
import { useEffect, useState } from 'react'
import { GoHeart, GoHeartFill, GoHome, GoShare } from 'react-icons/go'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'

import { DetailProducts } from '@widgets/detail'

import { locale } from '@lib/locale'

import { Carousel, CarouselContent, CarouselItem } from '@ui/_shardcn/carousel'

import { useReadProduct } from '../model/use-product'

const auth = {
	nickname: '우혁이최고',
	profileImageURL:
		'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fCVFQyVBMCU5QyVFRCU5MiU4OHxlbnwwfHwwfHx8MA%3D%3D',
}

const myProducts = [
	{
		title: '선글라스',
		locate: '심곡본동',
		createAt: '2024-09-05',
		price: 100000,
		category: '잡화',
		imageURL: [
			'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fCVFQyVBMCU5QyVFRCU5MiU4OHxlbnwwfHwwfHx8MA%3D%3D',
		],
	},
	{
		title: '플스4 화이트',
		locate: '심곡본동',
		createAt: '2024-09-08',
		price: 210000,
		category: '디지털기기',
		imageURL: [
			'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fCVFQyVBMCU5QyVFRCU5MiU4OHxlbnwwfHwwfHx8MA%3D%3D',
		],
	},
	{
		title: '텀블러',
		locate: '심곡본동',
		createAt: '2024-09-21',
		price: 10000,
		category: '생활/주방',
		imageURL: [
			'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fCVFQyVBMCU5QyVFRCU5MiU4OHxlbnwwfHwwfHx8MA%3D%3D',
		],
	},
	{
		title: '맥북',
		locate: '심곡본동',
		createAt: '2024-09-10',
		price: 1100000,
		category: '디지털기기',
		imageURL: [
			'https://plus.unsplash.com/premium_photo-1680538420450-ff2f4c19faa9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1589710917567-60ca712f0431?q=80&w=3051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1420406676079-b8491f2d07c8?q=80&w=2999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
	},
	{
		title: '그릇',
		locate: '심곡본동',
		createAt: '2024-09-21',
		price: 10000,
		category: '생활/주방',
		imageURL: [
			'https://plus.unsplash.com/premium_photo-1714702845510-e65f6ae711c2?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1727257049020-3496cfd2861a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
	},
	{
		title: '냉장고',
		locate: '심곡본동',
		createAt: '2024-09-10',
		price: 300000,
		category: '생활/주방',
		imageURL: [
			'https://images.unsplash.com/photo-1649518755041-651c29b56309?q=80&w=3006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
	},
]

export function Detail() {
	const router = useNavigate()
	const { id } = useParams()

	const { toggleHeader } = useHeaderStore()

	const { data: item, isLoading } = useReadProduct(Number(id))

	const [like, setLike] = useState(item?.isLike)

	useEffect(() => {
		toggleHeader(false)
		return () => toggleHeader(true)
	}, [toggleHeader])

	if (isLoading) return <div>로딩중</div>

	return (
		<>
			<header className="fixed left-0 right-0 top-4 z-10 flex items-center gap-4 px-4 [&_*]:cursor-pointer">
				<MdOutlineArrowBackIos className="size-6" onClick={() => router(-1)} />
				<GoHome className="mr-auto size-6" onClick={() => router('/')} />
				<GoShare className="size-6" />
				{/* 신고하기 <BsThreeDotsVertical className="size-4" /> */}
			</header>

			<section>
				<Carousel>
					<CarouselContent>
						{item?.images.map((image, index) => (
							<CarouselItem key={index}>
								<img src={image} alt={`${item.title} 이미지`} className="aspect-square w-full object-cover" />
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
				<div className="flex items-center gap-2 border-b px-4 py-6">
					<picture className="block aspect-square size-14 overflow-hidden rounded-full border">
						<img src={auth.profileImageURL} alt={auth.nickname} />
					</picture>
					<div className="flex flex-col justify-center">
						<strong>{auth.nickname}</strong>
						<p className="text-sm text-gray-500">{item?.area[0].name}</p>
					</div>
				</div>
				<div className="flex flex-col gap-2 px-4 py-6">
					<h1 className="text-2xl font-bold">{item?.title}</h1>
					<p className="text-sm text-gray-500">
						<u>{item?.category?.name}</u> ∙ {item?.createdAt && locale(item.createdAt)}
					</p>
					<p className="py-6">{item?.description}</p>
					<p className="text-sm text-gray-500">관심 {item?.like}</p>
				</div>
				<div className="fixed bottom-0 left-0 right-0 flex items-center gap-4 border-t border-gray-01 bg-white px-4 py-4">
					{like ? (
						<GoHeart className="size-6 fill-gray-02 font-bold" onClick={() => setLike(false)} />
					) : (
						<GoHeartFill className="size-6 fill-brand-01" onClick={() => setLike(true)} />
					)}

					<h3 className="mr-auto border-l-2 border-gray-01 pl-4 text-xl font-bold">
						{item?.price.toLocaleString('ko-KR')}원<span className="block text-sm text-gray-02">가격 제안 불가</span>
					</h3>
					{/* <ButtonBasic className="w-fit px-6 text-xl">채팅하기</ButtonBasic> */}
				</div>
			</section>
			<DetailProducts title={`${auth.nickname}님의 판매 물품`} data={myProducts} />
			<DetailProducts
				className="pb-16"
				title={`${item?.category?.name} 다른 상품`}
				data={myProducts.filter((product) => product.category === item?.category?.name)}
			/>
		</>
	)
}
