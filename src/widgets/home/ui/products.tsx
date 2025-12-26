import { useSearchParams } from 'react-router-dom'

import { ProductCard } from '@entities/common'

import { useReadProducts } from '../model/use-product'

export function Products() {
	const [searchParams] = useSearchParams()

	const keyword = searchParams.get('keyword') || undefined
	const area = searchParams.get('area') || undefined
	const minPrice = Number(searchParams.get('minPrice')) || undefined
	const maxPrice = Number(searchParams.get('maxPrice')) || undefined

	const { data: productsData } = useReadProducts({ keyword, area, minPrice, maxPrice, limit: 10, page: 1 })

	return (
		<ul className="flex flex-col">
			{productsData?.products?.map((product, index, array) => (
				<ProductCard key={product.id} product={product} index={index} array={array} />
			))}
		</ul>
	)
}
