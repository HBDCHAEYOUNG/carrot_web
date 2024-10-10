import { useHeaderStore } from '@store/headerStore'
import { useEffect } from 'react'
import { GoHeart, GoHeartFill, GoHome, GoShare } from 'react-icons/go'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'

import { DetailProducts } from '@widgets/detail'

import { locale } from '@lib/locale'

import { Carousel, CarouselContent, CarouselItem } from '@ui/_shardcn/carousel'
import { ButtonBasic } from '@ui/index'

import { useCreateLike, useDeleteLike } from '../model/use-like'
import { useReadProduct } from '../model/use-product'

const auth = {
	nickname: '우혁이최고',
	profileImageURL:
		'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fCVFQyVBMCU5QyVFRCU5MiU4OHxlbnwwfHwwfHx8MA%3D%3D',
}

export function Detail() {
	const router = useNavigate()
	const { id } = useParams()

	const { toggleHeader } = useHeaderStore()

	const { data: item, isLoading } = useReadProduct(Number(id))
	const { mutate: createLike } = useCreateLike()
	const { mutate: deleteLike } = useDeleteLike()

	const setLike = () => {
		createLike(Number(id))
	}
	const setDeleteLike = () => {
		deleteLike(Number(id))
	}

	useEffect(() => {
		toggleHeader(false)
		return () => toggleHeader(true)
	}, [toggleHeader])

	if (isLoading) return <div>로딩중</div>

	console.log(item)

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
						<p className="text-sm text-gray-500">{item?.areas[0].name}</p>
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
					{item?.isLike ? (
						<GoHeartFill className="size-6 fill-brand-01" onClick={() => setDeleteLike()} />
					) : (
						<GoHeart className="size-6 fill-gray-02 font-bold" onClick={() => setLike()} />
					)}

					<h3 className="mr-auto border-l-2 border-gray-01 pl-4 text-xl font-bold">
						{item?.price.toLocaleString('ko-KR')}원<span className="block text-sm text-gray-02">가격 제안 불가</span>
					</h3>
					<ButtonBasic className="w-fit px-6 text-xl">채팅하기</ButtonBasic>
				</div>
			</section>
			<section className="pb-10">
				<DetailProducts title={`${auth.nickname}님의 판매 물품`} />
				<DetailProducts className="pb-16" title={`${item?.category?.name} 다른 상품`} category={item?.areas[0].name} />
			</section>
		</>
	)
}
