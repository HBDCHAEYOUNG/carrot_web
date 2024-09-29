import { useForm } from 'react-hook-form'

import Form from '@ui/form/form'
import { ButtonBasic, Checkbox, InputSelect, InputText } from '@ui/index'

export function Join() {
	const form = useForm({
		mode: 'all',
		defaultValues: {
			keyword: '',
		},
	})

	const domainList = [
		{ value: 'naver.com', label: 'naver.com' },
		{ value: 'daum.net', label: 'daum.net' },
		{ value: 'hanmail.net', label: 'hanmail.net' },
		{ value: 'gmail.com', label: 'gmail.com' },
		{ value: 'nate.com', label: 'nate.com' },
		{ value: '직접입력', label: '직접입력' },
	]

	const agreement = [
		{ label: '14세 이상', value: 'adaultAgree' },
		{ label: '이용약관 동의', value: 'termsAgree' },
		{ label: '마케팅 정보 수신', value: 'snsAgree' },
	]

	const onSubmit = () => {
		console.log('submit')
	}

	console.log(form.watch())

	return (
		<section className="flex h-screen flex-col px-4 pt-16">
			<h1 className="pb-4 text-lg font-bold">회원가입</h1>
			{/* todo: <SocialloginForm />
			<hr className="my-4" /> */}

			<Form form={form} onSubmit={onSubmit} className="flex flex-col gap-4 [&_label]:font-semibold">
				<div className="flex items-end justify-center">
					<Form.Item name="email" label="이메일" className="flex-1">
						<InputText placeholder="이메일" />
					</Form.Item>
					<p className="mx-2 flex h-12 items-center">@</p>
					<Form.Item name="test" className="flex-1">
						<InputSelect options={domainList} />
					</Form.Item>
				</div>

				<Form.Item name="password" label="비밀번호" description="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.">
					<InputText placeholder="비밀번호" />
				</Form.Item>

				<Form.Item name="passwordConfirm" label="비밀번호 확인">
					<InputText placeholder="비밀번호 확인" />
				</Form.Item>

				<Form.Item name="nickname" label="닉네임" description="다른 유저와 겹치지 않도록 입력해주세요. (2~20자)">
					<InputText placeholder="비밀번호" />
				</Form.Item>

				<div className="flex flex-col gap-2">
					<label>약관동의</label>
					<div className="flex flex-col gap-2 rounded-md border p-4">
						{agreement.map((items) => (
							<Form.Item name={`agerement.${items.value}`}>
								<fieldset className="flex items-center gap-2">
									<Checkbox id={items.value} />
									<label htmlFor={items.value}>{items.label}</label>
								</fieldset>
							</Form.Item>
						))}
					</div>
				</div>

				<ButtonBasic>회원가입하기</ButtonBasic>
			</Form>
		</section>
	)
}
