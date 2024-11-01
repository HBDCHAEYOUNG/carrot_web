import { useSearchParams } from 'react-router-dom'

import { ProductCard } from '@entities/common'

import { useReadProducts } from '../model/use-product'

export function Products() {
	const [searchParams] = useSearchParams()

	const keyword = searchParams.get('keyword') || ''
	const area = searchParams.get('area') || ''
	const minPrice = Number(searchParams.get('minPrice')) || 0
	const maxPrice = Number(searchParams.get('maxPrice')) || 0
	// const category = searchParams.get('category') || ''

	const { data: productsData } = useReadProducts({ keyword, area, minPrice, maxPrice, limit: 10, page: 1 })

	return (
		<ul className="flex flex-col">
			{productsData?.products?.map((product, index, array) => (
				<ProductCard key={product.id} product={product} index={index} array={array} />
			))}
		</ul>
	)
}
