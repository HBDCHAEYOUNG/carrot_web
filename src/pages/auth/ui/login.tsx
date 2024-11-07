import { zodResolver } from '@hookform/resolvers/zod'
import { useAuthStore } from '@store/authStore'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import Form from '@ui/form/form'
import { ButtonBasic, InputText } from '@ui/index'

import { Logo } from '@icons/logo'

import { useLogin } from '../model/use-login'

export function Login() {
	const [isShowPassword, setIsShowPassword] = useState(false)

	const formSchema = z.object({
		email: z.string().email({ message: '이메일 형식이 올바르지 않습니다.' }),
	})
	const form = useForm({
		mode: 'all',
		resolver: zodResolver(formSchema),
	})

	const router = useNavigate()

	const { mutateAsync: login } = useLogin()
	const { setLogin } = useAuthStore()

	const onSubmit = async () => {
		const email = form.watch('email')
		const password = form.watch('password')

		try {
			const data = await login({ email, password })
			setLogin(data.token)
			router('/')
		} catch (error: any) {
			console.log(error.response.data.message)
		}
	}

	return (
		<section className="h-screen w-screen flex-col justify-center px-4 flex-center">
			<Logo className="mb-10" />

			<Form form={form} onSubmit={onSubmit} className="w-full">
				<Form.Item name="email">
					<InputText placeholder="이메일" className="h-12 w-full rounded-b-none" />
				</Form.Item>
				<div className="relative mb-2">
					<Form.Item name="password">
						<InputText
							type={isShowPassword ? 'text' : 'password'}
							placeholder="비밀번호"
							className="h-12 w-full rounded-t-none border-t-0 focus:border-t"
						/>
					</Form.Item>
					{isShowPassword ? (
						<IoEyeOffOutline
							className="absolute right-4 top-1/2 size-10 -translate-y-1/2 cursor-pointer p-2"
							onClick={() => setIsShowPassword(false)}
						/>
					) : (
						<IoEyeOutline
							className="absolute right-4 top-1/2 size-10 -translate-y-1/2 cursor-pointer p-2"
							onClick={() => setIsShowPassword(true)}
						/>
					)}
				</div>
				<ButtonBasic className="mb-0">로그인</ButtonBasic>
				<Link to="/auth/join" className="block cursor-pointer py-10 text-center text-sm text-brand-01">
					회원가입
				</Link>
			</Form>

			{/* <SocialloginForm className="mt-10" /> */}
		</section>
	)
}
