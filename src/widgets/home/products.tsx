import { IoLocationSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

import { locale } from '@lib/locale'
import compactNumber from '@lib/numberFormat'

const items = [
	{
		title: '선글라스',
		locate: '심곡본동',
		createAt: '2024-09-05',
		price: 100000,
		imageURL:
			'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fCVFQyVBMCU5QyVFRCU5MiU4OHxlbnwwfHwwfHx8MA%3D%3D',
	},
	{
		title: '플스4 화이트',
		locate: '심곡본동',
		createAt: '2024-09-08',
		price: 210000,
		imageURL:
			'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fCVFQyVBMCU5QyVFRCU5MiU4OHxlbnwwfHwwfHx8MA%3D%3D',
	},
	{
		title: '텀블러',
		locate: '심곡본동',
		createAt: '2024-09-21',
		price: 10000,
		imageURL:
			'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fCVFQyVBMCU5QyVFRCU5MiU4OHxlbnwwfHwwfHx8MA%3D%3D',
	},
]

export function Products() {
	const router = useNavigate()

	return (
		<ul className="flex flex-col px-2">
			{[...items, ...items, ...items, ...items].map(({ title, locate, createAt, imageURL, price }, index, array) => (
				<li>
					<Link
						to="#"
						className={`flex cursor-pointer py-4 ${index !== array.length - 1 ? 'border-b border-gray-01' : ''}`}
						onClick={() => router(`/detail/${index}`)}
					>
						<picture className="basis-1/3 overflow-hidden rounded-md">
							<img src={imageURL} alt={title} className="aspect-square size-full object-cover" />
						</picture>
						<div className="flex flex-1 basis-2/3 flex-col whitespace-nowrap pl-2 text-sm">
							<h3>{title}</h3>
							<small className="flex items-center text-gray-02">
								<IoLocationSharp />
								{locate} • {locale(createAt)}
							</small>
							<b className="font-bold">{compactNumber(price)}원</b>
						</div>
					</Link>
				</li>
			))}
		</ul>
	)
}