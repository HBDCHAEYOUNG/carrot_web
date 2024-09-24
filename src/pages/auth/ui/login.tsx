import { useForm } from 'react-hook-form'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { SiNaver } from 'react-icons/si'
import { Link } from 'react-router-dom'

import Form from '@ui/form/form'
import { ButtonBasic, ButtonCircle, InputText } from '@ui/index'

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
			<Logo className="mb-10 self-center" />

			<Form form={form} onSubmit={onSubmit}>
				<Form.Item name="phone">
					<InputText type="number" placeholder="휴대폰 번호" className="arrow-none h-12 w-full rounded-b-none" />
				</Form.Item>
				<Form.Item name="password">
					<InputText type="string" placeholder="비밀번호" className="mb-2 h-12 w-full rounded-t-none border-t-0 focus:border-t" />
				</Form.Item>
				<ButtonBasic text="로그인" className="mb-0 bg-brand-01 text-white" />

				<Link to="#" className="block cursor-pointer py-2 text-center text-xs text-gray-500">
					비밀번호 찾기
				</Link>
			</Form>

			<div className="mt-10 flex flex-col items-center">
				<small className="pb-2 text-xs text-gray-500">SNS계정으로 간편 로그인</small>

				<div className="flex gap-2">
					<ButtonCircle className="bg-[#fcda00]" icon={<RiKakaoTalkFill className="size-7" />} />
					<ButtonCircle className="bg-[#10ad00]" icon={<SiNaver className="size-5" />} />
				</div>
			</div>
		</section>
	)
}
