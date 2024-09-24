import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { PrevpageBtn } from '@ui/button/prevpage-btn'
import Form from '@ui/form/form'
import { InputText } from '@ui/index'

export function StepOne() {
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
		<section className="flex h-screen flex-col px-4">
			<PrevpageBtn />
			<h1 className="mt-6 pb-4 text-2xl font-bold">
				안녕하세요! <br /> 휴대폰 번호로 가입 해주세요.
			</h1>
			<p className="pb-8 text-sm leading-tight text-gray-500">
				당근은 휴대폰 번호로 가입 해요. 번호는 <b>안전하게 보관</b>되며 어디에도 공개되지 않아요.
			</p>

			<Form form={form} onSubmit={onSubmit}>
				<Form.Item name="phone">
					<InputText type="number" placeholder="휴대폰 번호" className="mb-3 h-12 w-full" />
				</Form.Item>
				{/* <button className="h-12 w-full rounded-sm border border-gray-300 bg-white px-3 text-lg font-bold text-gray-400 focus:border-black">
					인증문자 받기
				</button> */}
			</Form>

			<small className="my-8 self-center">
				휴대폰 번호가 변경되었나요?{' '}
				<Link to="#" className="cursor-pointer font-bold underline">
					이메일 계정으로 찾기
				</Link>
			</small>
		</section>
	)
}
