import * as React from 'react'

import { cn } from '@lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputText = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn('h-10 rounded-sm border border-gray-300 px-3 focus:border-black focus:outline-none', className)}
			ref={ref}
			{...props}
		/>
	)
})

InputText.displayName = 'InputText'
