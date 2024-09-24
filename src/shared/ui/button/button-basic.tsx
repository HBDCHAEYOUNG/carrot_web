import { PropsWithChildren, ReactNode } from 'react'

interface ButtonLinkProps {
	text: string
	className?: string
	icon?: ReactNode
}

export function ButtonBasic({ text, className, icon }: PropsWithChildren<ButtonLinkProps>) {
	return (
		<button className={`${className} mb-2 flex h-12 w-full items-center justify-center rounded-sm px-3 font-semibold hover:brightness-90`}>
			{icon} {text}
		</button>
	)
}
