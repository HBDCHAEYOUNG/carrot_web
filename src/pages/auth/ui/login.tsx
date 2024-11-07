import { useAuthStore } from '@store/authStore'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { ButtonPassword } from '@ui/button/button-password'
import Form from '@ui/form/form'
import { ButtonBasic, InputText } from '@ui/index'

import { Logo } from '@icons/logo'

import { useLogin } from '../model/use-login'

export function Login() {
	const [isShowPassword, setIsShowPassword] = useState(false)

	const form = useForm({
		mode: 'all',
	})

	const router = useNavigate()

	const { mutateAsync: login, error } = useLogin()
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
	console.log(error)
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
					<ButtonPassword isShowPassword={isShowPassword} setIsShowPassword={setIsShowPassword} />
				</div>
				{error && <p className="pb-1 text-sm text-red-500">{error?.response?.data?.errors || error?.response?.data?.message}</p>}
				<ButtonBasic className="mb-0">로그인</ButtonBasic>
				<Link to="/auth/join" className="text-smgi block cursor-pointer py-10 text-center">
					회원가입
				</Link>
			</Form>

			{/* <SocialloginForm className="mt-10" /> */}
		</section>
	)
}
