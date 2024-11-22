import { useSearchHistoryStore } from '@pages/home/store/use-search-history'
import { useNavigate } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { HistoryCard } from '@features/header'

import { SearchBox } from '@ui/index'

const keyword = ['아이폰', '애플워치', '홍대 쇼파', '잠실 냉장고', '아이폰 케이스', '애플워치 케이스']

export function SearchForm() {
	const { searchHistory, setInit, setSearchHistory } = useSearchHistoryStore()
	console.log(searchHistory)
	const router = useNavigate()

	return (
		<div className="fixed left-0 top-0 z-10 h-screen w-full bg-white pt-2">
			<SearchBox />

			<section className="common-padding [&_*]:text-sm">
				<h2 className="mb-2 mt-6 block font-bold">추천</h2>
				<Swiper
					modules={[FreeMode]}
					freeMode={true}
					spaceBetween={10}
					slidesPerView={'auto'}
					className="flex w-full overflow-hidden whitespace-nowrap"
				>
					{keyword.map((item, idx) => (
						<SwiperSlide
							key={idx}
							onClick={() => {
								router(`/search?keyword=${item}`)
								setSearchHistory(item)
							}}
							className="flex-1 flex-grow-0 cursor-pointer rounded-2xl border border-gray-01 p-1 px-2"
						>
							{item}
						</SwiperSlide>
					))}
				</Swiper>

				<div className="mb-2 mt-6 flex items-center justify-between">
					<h2 className="inline-block font-bold">최근 검색어</h2>
					<button className="text-gray-02" onClick={setInit}>
						전체 삭제
					</button>
				</div>

				<ul className="flex flex-col gap-2">{searchHistory?.map((item, idx) => <HistoryCard key={idx} item={item} />)}</ul>
			</section>
		</div>
	)
}
