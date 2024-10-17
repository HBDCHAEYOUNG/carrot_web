import { useAuthStore } from '@store/authStore'
import { GoHeart } from 'react-icons/go'
import { IoLocationSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import { useReadSales } from '@widgets/home'

import { locale } from '@lib/locale'
import compactNumber from '@lib/numberFormat'

export function SalesProducts() {
	const { token } = useAuthStore()

	const { data: sales } = useReadSales(token)
	console.log(123, sales)

	return (
		<ul className="flex flex-col">
			{sales?.products.map(({ id, price, thumbnail, title, areas, createdAt, like }, index, array) => (
				<li key={id}>
					<Link
						preventScrollReset
						to={`/detail/${id}`}
						className={`relative flex cursor-pointer py-4 common-padding ${index !== array.length - 1 ? 'border-b border-gray-01' : ''}`}
					>
						<picture className="basis-1/3 overflow-hidden rounded-md">
							<img src={thumbnail} alt={title} className="aspect-square size-full object-cover" />
						</picture>
						<div className="flex flex-1 basis-2/3 flex-col whitespace-nowrap pl-2 text-sm">
							<h3 className="text-lg">{title}</h3>
							<small className="flex items-center text-gray-02">
								<IoLocationSharp />
								{areas?.[0].name} • {locale(createdAt ?? '')}
							</small>
							<b className="text-lg font-semibold">{compactNumber(Number(price))}원</b>
							<small className="absolute bottom-4 right-6 flex items-center gap-1 text-gray-02">
								<GoHeart />
								{like}
							</small>
						</div>
					</Link>
				</li>
			))}
		</ul>
	)
}
