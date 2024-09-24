interface ButtonCircleProps {
	className: string
	icon: React.ReactNode
}

export function ButtonCircle({ className, icon }: ButtonCircleProps) {
	return <button className={`${className} flex size-10 items-center justify-center rounded-full p-1`}>{icon}</button>
}
