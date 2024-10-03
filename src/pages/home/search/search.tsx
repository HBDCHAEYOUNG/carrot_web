import { useHeaderStore } from '@store/headerStore'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'

import { Products } from '@widgets/home'

import { Button, Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, SearchBox } from '@ui/index'

const filterList = [
	{ title: '읍내동 외 동네 설정', drawerTitle: '동네 설정', content: [''] },
	{ title: '가격', drawerTitle: '가격', content: ['최소금액', '최대금액'] },
	{
		title: '카테고리',
		drawerTitle: '카테고리',
		content: [
			'디지털기기',
			'생활가전',
			'가구/인테리어',
			'유아동',
			'유아도서',
			'생활/주방',
			'스포츠/레저',
			'여성잡화',
			'여성의류',
			'남성패션/잡화',
			'취미/게임/음반',
			'뷰티/미용',
			'반려동물용품',
			'도서',
			'식물',
			'기타 중고물품',
		],
	},
	{ title: '최신순', drawerTitle: '범위', content: ['최신순', '오래된순'] },
	{ title: '최신순', drawerTitle: '범위', content: ['최신순', '오래된순'] },
	{ title: '최신순', drawerTitle: '범위', content: ['최신순', '오래된순'] },
]

export function Search() {
	const [searchParams] = useSearchParams()
	const query = searchParams.get('keyword') || ''

	const { toggleHeader } = useHeaderStore()

	useEffect(() => {
		toggleHeader(false)
		return () => toggleHeader(true)
	}, [toggleHeader])

	const onSubmitSearch = () => {
		console.log('수정정정')
	}

	return (
		<div className="px-4">
			<SearchBox onSubmitSearch={onSubmitSearch} />
			<Drawer>
				<div>
					{filterList.map((item, index) => (
						<DrawerTrigger key={index} className="ml-3 cursor-pointer rounded-full bg-gray-01 p-1 px-3 text-sm outline-none">
							<SwiperSlide>{item.title}</SwiperSlide>
						</DrawerTrigger>
					))}
				</div>

				<DrawerContent className="">
					<DrawerHeader className="flex items-center border-b border-gray-01 py-6">
						<DrawerTitle>제목</DrawerTitle>
					</DrawerHeader>
					<div className="h-full">리스트</div>
					<DrawerFooter className="w-full flex-row justify-center gap-2">
						<Button className="flex-grow bg-gray-01 text-black">초기화</Button>
						<DrawerClose className="flex-grow-[3]">
							<Button className="w-full bg-brand-01">적용하기</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
			<small className="block w-full text-center text-gray-02">{`"${query}" 검색결과 입니다.`}</small>
			<Products />
		</div>
	)
}
