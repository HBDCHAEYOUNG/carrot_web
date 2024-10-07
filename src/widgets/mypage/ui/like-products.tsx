import { useCreateLike, useDeleteLike, useGetLike } from '@pages/detail/model/use-like'
import { MouseEvent } from 'react'
import { GoHeart, GoHeartFill } from 'react-icons/go'
import { IoLocationSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

import { locale } from '@lib/locale'
import compactNumber from '@lib/numberFormat'

export function LikeProducts() {
	const router = useNavigate()

	const { data: like } = useGetLike()

	const { mutate: createLike } = useCreateLike()
	const { mutate: deleteLike } = useDeleteLike()

	const onClickLike = (id: number) => async (e: MouseEvent<HTMLOrSVGElement>) => {
		e.stopPropagation()
		e.preventDefault()

		try {
			await (like ? deleteLike(id) : createLike(id))
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<ul className="flex flex-col">
			{like?.product.map(({ id, productId, price, thumbnail, title, areas, createdAt, like }, index, array) => (
				<li key={id}>
					<Link
						to="#"
						className={`relative flex cursor-pointer py-4 common-padding ${index !== array.length - 1 ? 'border-b border-gray-01' : ''}`}
						onClick={() => {
							router(`/detail/${productId}`)
							window.scrollTo(0, 0)
						}}
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
							<small className="absolute bottom-4 right-6 flex items-center gap-1 text-gray-02">
								<GoHeart />
								{like}
							</small>
						</div>
						{/* {like ? ( */}
						<GoHeartFill className="size-8 fill-brand-01" onClick={onClickLike(productId)} />
						{/* ) : ( */}
						{/* // 	<GoHeart className="size-8 fill-gray-02 font-bold" onClick={onClickLike(productId)} /> */}
						{/* // )} */}
					</Link>
				</li>
			))}
		</ul>
	)
}
