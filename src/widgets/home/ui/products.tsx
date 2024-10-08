import { ProductCard } from '@entities/common'

import { useReadProducts } from '../model/use-product'

export function Products() {
	const { data: productsData } = useReadProducts()

	return (
		<ul className="flex flex-col">
			{productsData?.products?.map((product, index, array) => (
				<ProductCard key={product.id} product={product} index={index} array={array} />
			))}
		</ul>
	)
}
