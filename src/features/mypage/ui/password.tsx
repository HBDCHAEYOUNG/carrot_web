import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { cn } from '@lib/utils'

import Form from '@ui/form/form'
import { ButtonPassword, InputText } from '@ui/index'

interface PasswordProps {
	label?: string
	className?: string
}

export function Password({ label, className }: PasswordProps) {
	const form = useFormContext()
	const [isShowPassword, setIsShowPassword] = useState(false)
	const password = form.watch('password')

	return (
		<div className="relative mb-2">
			<Form.Item label={label} name="password">
				<InputText
					name="password"
					type={isShowPassword ? 'text' : 'password'}
					placeholder="비밀번호"
					className={cn('h-12 w-full rounded-t-none border-t-0 focus:border-t', className)}
					value={password}
					onChange={(e) => form.setValue('password', e.target.value)}
				/>
			</Form.Item>
			<ButtonPassword isShowPassword={isShowPassword} setIsShowPassword={setIsShowPassword} />
		</div>
	)
}
