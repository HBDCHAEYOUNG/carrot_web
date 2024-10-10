import { useAuthStore } from '@store/authStore'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { SocialloginForm } from '@widgets/header'

import Form from '@ui/form/form'
import { ButtonBasic, InputText } from '@ui/index'

import { Logo } from '@icons/logo'

import { useLogin } from '../model/use-login'

export function Login() {
	const form = useForm({
		mode: 'all',
	})

	const router = useNavigate()

	const { mutateAsync: login } = useLogin()
	const { setLogin, isLogin } = useAuthStore()

	const onSubmit = async () => {
		const email = form.watch('email')
		const password = form.watch('password')

		try {
			const data = await login({ email, password })
			setLogin(data.token)
			router('/')
			console.log(isLogin)
		} catch (error: any) {
			console.log(error.response.data.message)
		}
	}

	return (
		<section className="flex h-screen w-screen flex-col justify-center px-4">
			<Link to="/" className="flex justify-center">
				<Logo className="mb-10 cursor-pointer" />
			</Link>

			<Form form={form} onSubmit={onSubmit}>
				<Form.Item name="email">
					<InputText placeholder="이메일" className="h-12 w-full rounded-b-none" />
				</Form.Item>
				<Form.Item name="password">
					<InputText placeholder="비밀번호" className="mb-2 h-12 w-full rounded-t-none border-t-0 focus:border-t" />
				</Form.Item>
				<ButtonBasic className="mb-0">로그인</ButtonBasic>

				<Link to="#" className="block cursor-pointer py-2 text-center text-xs text-gray-500">
					비밀번호 찾기
				</Link>
			</Form>

			<SocialloginForm className="mt-10" />
		</section>
	)
}
