import { useHeaderStore } from '@store/headerStore'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { CategoryFilter } from '@features/search'
import { AreaFilter } from '@features/search/ui/area-filter'
import { PriceFilter } from '@features/search/ui/price-filter'

import { Products } from '@widgets/home'

import { Carousel, CarouselContent, CarouselDrawer, SearchBox } from '@ui/index'

const filterList = [
	{ title: '읍내동 외 동네 설정', drawerTitle: '동네 설정' },
	{ title: '가격', drawerTitle: '가격' },
	{
		title: '카테고리',
		drawerTitle: '카테고리',
	},
]

export function Search() {
	const [searchParams] = useSearchParams()

	const query = searchParams.get('keyword') || ''
	const area = searchParams.get('area') || ''
	const category = searchParams.get('category') || ''
	const minPrice = searchParams.get('minPrice') || ''
	const maxPrice = searchParams.get('maxPrice') || ''

	const { toggleHeader } = useHeaderStore()

	useEffect(() => {
		toggleHeader(false)
		return () => toggleHeader(true)
	}, [toggleHeader])

	console.log(area, category, minPrice, maxPrice)
	return (
		<div className="pt-2">
			<SearchBox keyword={query} />

			<Carousel
				opts={{
					dragFree: true,
				}}
			>
				<CarouselContent className="ml-1.5 mr-6 h-1/3">
					{...filterList.map((item, index) => (
						<CarouselDrawer key={index} title={item.drawerTitle}>
							{index === 0 && <AreaFilter />}
							{index === 1 && <PriceFilter />}
							{index === 2 && <CategoryFilter />}
						</CarouselDrawer>
					))}
				</CarouselContent>
			</Carousel>

			<small className="block w-full pt-4 text-center text-gray-02">{`"${query}" 검색결과 입니다.`}</small>

			<Products />
		</div>
	)
}
