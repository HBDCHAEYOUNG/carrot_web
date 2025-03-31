import { FaUserLarge } from 'react-icons/fa6'

import { cn } from '@lib/utils'

interface ProfileProps {
	className?: string
	img: string
	name: string
	area: string
}

export function Profile({ className, img, name, area }: ProfileProps) {
	return (
		<div className="flex items-center gap-2 py-6">
			<picture className={cn('size-10 overflow-hidden rounded-full bg-gray-01 flex-center', className)}>
				{img ? <img src={img} alt={name} /> : <FaUserLarge className="size-6 fill-white" />}
			</picture>
			<div className="flex flex-col justify-center">
				<strong>{name}</strong>
				<p className="text-sm text-gray-500">{area}</p>
			</div>
		</div>
	)
}
