import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import { useForm } from 'react-hook-form'

import { SocialloginForm } from '@widgets/header'

import { Select } from '@ui/_shardcn/select'
import Form from '@ui/form/form'
import { ButtonBasic, Checkbox, InputText } from '@ui/index'

export function SignUp() {
	const form = useForm({
		mode: 'all',
		defaultValues: {
			keyword: '',
		},
	})

	const domainList = [
		{ value: 'naver', label: 'naver.com' },
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
	return (
		<section className="flex h-screen flex-col px-4 pt-16">
			<h1 className="pb-4 text-lg font-bold">회원가입</h1>
			<SocialloginForm />
			<hr className="my-4" />

			<Form form={form} onSubmit={onSubmit} className="flex flex-col gap-4 [&_label]:font-semibold">
				<div className="flex flex-col gap-2">
					<label>이메일</label>
					<div className="flex items-center justify-center">
						<Form.Item name="email" className="flex-1">
							<InputText placeholder="이메일" />
						</Form.Item>
						<p className="mx-2">@</p>
						<Form.Item name="email" className="flex-1">
							<Select>
								<SelectTrigger className="h-12 w-full rounded-md border border-gray-300 pl-3 text-left text-gray-400">
									<SelectValue placeholder="선택해주세요" />
								</SelectTrigger>
								<SelectContent className="w-full rounded-md border border-gray-300 bg-gray-200 px-1 py-3">
									{domainList.map((item) => (
										<SelectItem
											key={item.value}
											className="flex-1 rounded-md px-4 py-1 hover:bg-brand-01 hover:text-white hover:outline-none"
											value={item.value}
										>
											{item.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</Form.Item>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<label>비밀번호</label>
					<small className="text-gray-400">영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</small>
					<Form.Item name="password">
						<InputText placeholder="비밀번호" />
					</Form.Item>
				</div>

				<div className="flex flex-col gap-2">
					<label>비밀번호 확인</label>

					<Form.Item name="passwordConfirm">
						<InputText placeholder="비밀번호 확인" />
					</Form.Item>
				</div>

				<div className="flex flex-col gap-2">
					<label>닉네임</label>
					<small className="text-gray-400">다른 유저와 겹치지 않도록 입력해주세요. (2~20자)</small>
					<Form.Item name="password">
						<InputText placeholder="비밀번호" />
					</Form.Item>
				</div>

				<div className="flex flex-col gap-2">
					<label>약관동의</label>
					<div className="flex flex-col gap-2 rounded-md border p-4">
						{agreement.map((items) => (
							<Form.Item name="terms">
								<fieldset className="flex items-center gap-2">
									<Checkbox />
									<label>{items.label}</label>
								</fieldset>
							</Form.Item>
						))}
					</div>
				</div>

				<ButtonBasic text="회원가입하기" className="bg-brand-01 text-white" />
			</Form>
		</section>
	)
}
