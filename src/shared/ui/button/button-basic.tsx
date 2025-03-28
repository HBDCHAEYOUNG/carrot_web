import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react'

import { cn } from '@lib/utils'

interface ButtonLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	icon?: ReactNode
	onClick?: () => void
	type?: 'button' | 'submit' | 'reset'
}
export function ButtonBasic({ type, children, className, icon, onClick, ...rest }: PropsWithChildren<ButtonLinkProps>) {
	// todo
	return (
		<button
			type={type || 'button'}
			onClick={onClick}
			className={cn(
				'my-2 flex h-12 w-full items-center justify-center rounded-sm bg-brand-01 px-3 font-semibold text-white hover:brightness-90',
				className,
			)}
			{...rest}
		>
			{icon} {children}
		</button>
	)
}
