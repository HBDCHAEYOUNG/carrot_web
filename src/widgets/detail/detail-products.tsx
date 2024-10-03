import { useNavigate } from 'react-router-dom'

import compactNumber from '@lib/numberFormat'
import { cn } from '@lib/utils'

interface DetailProductsProps {
	title: string
	className?: string
	data: Array<{
		title: string
		imageURL: string[]
		price: number
		category: string
		locate: string
		createAt: string
	}>
}

export function DetailProducts({ title, data, className }: DetailProductsProps) {
	const router = useNavigate()

	return (
		<div className={cn('border-t px-4 py-6', className)}>
			<h2 className="mb-4 text-lg font-bold">{title}</h2>
			<ul className="grid grid-cols-2 gap-4">
				{data.map(({ title, imageURL, price }, index) => (
					<li
						className={`flex cursor-pointer flex-col`}
						onClick={() => {
							router(`/detail/${index}`)
							window.scrollTo(0, 0)
						}}
					>
						<picture className="overflow-hidden rounded-md">
							<img src={imageURL[0]} alt={title} className="aspect-[4/3] size-full object-cover" />
						</picture>
						<h3 className="mt-2 truncate text-sm">{title}</h3>
						<span className="font-bold">{compactNumber(price)}원</span>
					</li>
				))}
			</ul>
		</div>
	)
}
