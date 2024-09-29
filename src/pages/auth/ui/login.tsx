import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { SocialloginForm } from '@widgets/header'

import Form from '@ui/form/form'
import { ButtonBasic, InputText } from '@ui/index'

import { Logo } from '@icons/logo'

export function Login() {
	const form = useForm({
		mode: 'all',
		defaultValues: {
			keyword: '',
		},
	})

	const onSubmit = () => {
		console.log(form.watch())
	}

	return (
		<section className="flex h-screen w-screen flex-col justify-center px-4">
			<Link to="/" className="flex justify-center">
				<Logo className="mb-10 cursor-pointer" />
			</Link>

			<Form form={form} onSubmit={onSubmit}>
				<Form.Item name="phone">
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
