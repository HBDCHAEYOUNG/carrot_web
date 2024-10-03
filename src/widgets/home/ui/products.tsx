import { IoLocationSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

import { locale } from '@lib/locale'
import compactNumber from '@lib/numberFormat'

import { useReadProducts } from '../model/use-product'

export function Products() {
	const router = useNavigate()

	const { data: productsData } = useReadProducts()

	return (
		<ul className="flex flex-col">
			{productsData?.products?.map(({ area, createdAt, price, thumbnail, title }, index, array) => (
				<li>
					<Link
						to="#"
						className={`flex cursor-pointer py-4 common-padding ${index !== array.length - 1 ? 'border-b border-gray-01' : ''}`}
						onClick={() => {
							router(`/detail/${index}`)
							window.scrollTo(0, 0)
						}}
					>
						<picture className="basis-1/3 overflow-hidden rounded-md">
							<img src={thumbnail} alt={title} className="aspect-square size-full object-cover" />
						</picture>
						<div className="flex flex-1 basis-2/3 flex-col whitespace-nowrap pl-2 text-sm">
							<h3>{title}</h3>
							<small className="flex items-center text-gray-02">
								<IoLocationSharp />
								{area[0].name} • {locale(createdAt)}
							</small>
							<b className="font-bold">{compactNumber(price)}원</b>
						</div>
					</Link>
				</li>
			))}
		</ul>
	)
}
