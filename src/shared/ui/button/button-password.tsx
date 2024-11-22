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
				<IoEyeOutline
					className={`absolute bottom-[0.1%] right-3 size-10 cursor-pointer p-2 ${className}`}
					onClick={() => setIsShowPassword(false)}
				/>
			) : (
				<IoEyeOffOutline
					className={`absolute bottom-[0.1%] right-3 size-10 cursor-pointer p-2 ${className}`}
					onClick={() => setIsShowPassword(true)}
				/>
			)}
		</div>
	)
}
