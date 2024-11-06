import { FaUserLarge } from 'react-icons/fa6'

import { cn } from '@lib/utils'

interface ProfileProps {
	className?: string
	img?: string
	name?: string
}

export function ProfileImg({ className, img, name }: ProfileProps) {
	return (
		<picture className={cn('size-10 overflow-hidden rounded-full bg-gray-01 flex-center', className)}>
			{img ? <img src={img} alt={name} /> : <FaUserLarge className="size-6 fill-white" />}
		</picture>
	)
}
