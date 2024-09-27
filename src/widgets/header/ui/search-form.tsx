import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { GoClock } from 'react-icons/go'
import { MdClose, MdOutlineArrowBackIos } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Form from '@ui/form/form'
import { InputText } from '@ui/index'

interface SearchFormProps {
	onClickSearch: () => void
}

export function SearchForm({ onClickSearch }: SearchFormProps) {
	const router = useNavigate()

	const form = useForm()

	const [searchHistory, setSearchHistory] = useState<string[]>(['우혁이', '채영이'])

	const keyword = ['아이폰', '애플워치', '홍대 쇼파', '잠실 냉장고', '아이폰 케이스', '애플워치 케이스']

	const onSubmitSearch = () => {
		const value = form.watch('keyword')
		if (searchHistory.includes(value)) {
			return
		}
		setSearchHistory([...searchHistory, value])
		console.log([...searchHistory, value])
		router(`/search?keyword=${value}`)
	}

	return (
		<div className="fixed left-0 top-0 z-10 h-screen w-full bg-white px-4 [&_*]:text-sm">
			<Form form={form} onSubmit={onSubmitSearch} className="mt-2 flex items-center justify-between gap-3">
				<MdOutlineArrowBackIos onClick={onClickSearch} className="size-6" />
				<Form.Item name="keyword" className="w-full">
					<InputText className="w-full rounded-lg border-none bg-gray-01" placeholder="검색어를 입력하세요" />
				</Form.Item>
			</Form>
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
						<SwiperSlide key={idx} className="flex-1 cursor-pointer rounded-2xl border border-gray-01 p-1 px-2">
							{item}
						</SwiperSlide>
					)
				})}
			</Swiper>
			
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
		</div>
	)
}
