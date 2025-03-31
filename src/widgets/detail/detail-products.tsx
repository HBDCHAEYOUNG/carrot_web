import { useNavigate } from 'react-router-dom'

import { useReadProducts } from '@widgets/home'

import compactNumber from '@lib/numberFormat'
import { cn } from '@lib/utils'

interface DetailProductsProps {
	title: string
	className?: string
	category?: string
}

export function DetailProducts({ title, category, className }: DetailProductsProps) {
	const router = useNavigate()

	const { data } = useReadProducts({ limit: 10, page: 1 })

	const productsData = data?.products.filter((product: any) => product.areas[0].name === category)

	return (
		<div className={cn('border-t px-4 py-6', className)}>
			<h2 className="mb-4 text-lg font-bold">{title}</h2>
			<ul className="grid grid-cols-2 gap-4">
				{productsData?.map(({ title, price, thumbnail }: any, index: number) => (
					<li
						className={`flex cursor-pointer flex-col`}
						onClick={() => {
							router(`/detail/${index}`)
							window.scrollTo(0, 0)
						}}
					>
						<picture className="overflow-hidden rounded-md">
							<img src={thumbnail} alt={title} className="aspect-[4/3] size-full object-cover" />
						</picture>
						<h3 className="mt-2 truncate text-sm">{title}</h3>
						<span className="font-bold">{compactNumber(price)}원</span>
					</li>
				))}
			</ul>
		</div>
	)
}
