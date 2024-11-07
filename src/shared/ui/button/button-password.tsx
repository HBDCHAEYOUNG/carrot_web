import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

interface ButtonPasswordProps {
	isShowPassword: boolean
	setIsShowPassword: (value: boolean) => void
	className?: string
}

export function ButtonPassword({ isShowPassword, setIsShowPassword, className }: ButtonPasswordProps) {
	return (
		<div>
			{isShowPassword ? (
				<IoEyeOffOutline
					className={`absolute right-4 top-1/2 size-10 -translate-y-1/2 cursor-pointer p-2 ${className}`}
					onClick={() => setIsShowPassword(false)}
				/>
			) : (
				<IoEyeOutline
					className={`absolute right-4 top-1/2 size-10 -translate-y-1/2 cursor-pointer p-2 ${className}`}
					onClick={() => setIsShowPassword(true)}
				/>
			)}
		</div>
	)
}
