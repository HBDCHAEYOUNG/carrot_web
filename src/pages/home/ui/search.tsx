import { useHeaderStore } from '@store/headerStore'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Products } from '@widgets/home'

import { Carousel, CarouselContent, CarouselDrawer, SearchBox } from '@ui/index'

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
]

export function Search() {
	const [searchParams] = useSearchParams()
	const query = searchParams.get('keyword') || ''
	const { toggleHeader } = useHeaderStore()

	useEffect(() => {
		toggleHeader(false)
		return () => toggleHeader(true)
	}, [toggleHeader])

	return (
		<div className="pt-2">
			<SearchBox />

			<Carousel
				opts={{
					dragFree: true,
				}}
			>
				<CarouselContent className="ml-1.5 mr-6">
					{[...filterList, ...filterList, ...filterList].map((item, index) => (
						<CarouselDrawer key={index} title={item.drawerTitle}>
							{index === 0 && <div>1</div>}
							{index === 1 && <div>2</div>}
							{index === 2 && <div>3</div>}
						</CarouselDrawer>
					))}
				</CarouselContent>
			</Carousel>

			<small className="block w-full pt-4 text-center text-gray-02">{`"${query}" 검색결과 입니다.`}</small>

			<Products />
		</div>
	)
}
