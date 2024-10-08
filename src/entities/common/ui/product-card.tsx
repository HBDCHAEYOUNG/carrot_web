import { ProductListDataDto } from '@type/data-contracts'
import { IoLocationSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import { locale } from '@lib/locale'
import compactNumber from '@lib/numberFormat'
import { cn } from '@lib/utils'

interface ProductCardProps {
	product: ProductListDataDto['products'][0]
	index: number
	array: ProductListDataDto['products']
}

export function ProductCard({ product, index, array }: ProductCardProps) {
	const { id, thumbnail, title, areas, createdAt, price } = product

	return (
		<li key={id}>
			<Link
				to={`/detail/${id}`}
				className={cn('flex cursor-pointer py-4 common-padding', index !== array.length - 1 && 'border-b border-gray-01')}
			>
				<picture className="basis-1/3 overflow-hidden rounded-md">
					<img src={thumbnail} alt={title} className="aspect-square size-full object-cover" />
				</picture>
				<div className="flex flex-1 basis-2/3 flex-col whitespace-nowrap pl-2 text-sm">
					<h3 className="text-lg">{title}</h3>
					<small className="flex items-center text-gray-02">
						<IoLocationSharp />
						{areas[0].name} • {locale(createdAt)}
					</small>
					<b className="text-lg font-semibold">{compactNumber(price)}원</b>
				</div>
			</Link>
		</li>
	)
}
