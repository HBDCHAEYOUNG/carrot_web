import { PropsWithChildren, ReactNode } from 'react'

import { cn } from '@lib/utils'

interface ButtonLinkProps {
	className?: string
	icon?: ReactNode
}
export function ButtonBasic({ children, className, icon }: PropsWithChildren<ButtonLinkProps>) {
	// todo
	return (
		<button
			className={cn(
				'mb-2 flex h-12 w-full items-center justify-center rounded-sm bg-brand-01 px-3 font-semibold text-white hover:brightness-90',
				className,
			)}
		>
			{icon} {children}
		</button>
	)
}
