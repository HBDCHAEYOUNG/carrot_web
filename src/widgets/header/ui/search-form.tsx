import { useState } from 'react'
import { GoClock } from 'react-icons/go'
import { MdClose } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SearchBox } from '@ui/index'

export function SearchForm() {
	const router = useNavigate()

	// const { setSearchMode } = useSearchStore()

	const [searchHistory, setSearchHistory] = useState<string[]>(['우혁이', '채영이'])

	const keyword = ['아이폰', '애플워치', '홍대 쇼파', '잠실 냉장고', '아이폰 케이스', '애플워치 케이스']

	return (
		<div className="fixed left-0 top-0 z-10 h-screen w-full bg-white">
			<SearchBox />

			<section className="common-padding [&_*]:text-sm">
				<strong className="mb-2 mt-6 block">추천</strong>
				<Swiper
					modules={[FreeMode]}
					freeMode={true}
					spaceBetween={10}
					slidesPerView={'auto'}
					className="flex w-full overflow-hidden whitespace-nowrap"
				>
					{keyword.map((item, idx) => {
						return (
							<SwiperSlide
								key={idx}
								onClick={() => {
									router(`/search?keyword=${item}`)
								}}
								className="flex-1 cursor-pointer rounded-2xl border border-gray-01 p-1 px-2"
							>
								{item}
							</SwiperSlide>
						)
					})}
				</Swiper>

				<div className="flex items-center justify-between">
					<strong className="mb-2 mt-6 inline-block">최근 검색어</strong>
					<button className="text-gray-02" onClick={() => setSearchHistory([])}>
						전체 삭제
					</button>
				</div>
				<div className="flex flex-col gap-2">
					{searchHistory.map((item, idx) => {
						return (
							<div className="flex items-center">
								<GoClock className="size-6 rounded-full border border-gray-01 p-1" />
								<p key={idx} className="ml-4 flex-1">
									{item}
								</p>
								<MdClose
									className="size-4 cursor-pointer fill-gray-02"
									onClick={() => setSearchHistory(searchHistory.filter((historyItem) => historyItem !== item))}
								/>
							</div>
						)
					})}
				</div>
			</section>
		</div>
	)
}
