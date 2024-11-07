import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { AreaDrawer } from '@entities/join'

import { useReadAreas } from '@widgets/header'

import Form from '@ui/form/form'
import { ButtonBasic, Checkbox, InputSelect, InputText } from '@ui/index'

import { JoinFormData, joinSchema } from '../model/join.schema'
import { useJoin } from '../model/use-join'

const domainList = [
	{ value: 'naver.com', label: 'naver.com' },
	{ value: 'daum.net', label: 'daum.net' },
	{ value: 'hanmail.net', label: 'hanmail.net' },
	{ value: 'gmail.com', label: 'gmail.com' },
	{ value: 'nate.com', label: 'nate.com' },
	{ value: '직접입력', label: '직접입력' },
]

const agreement = [
	{ label: '14세 이상', value: 'adultAgree' },
	{ label: '이용약관 동의', value: 'termsAgree' },
	{ label: '마케팅 정보 수신', value: 'snsAgree' },
]

export function Join() {
	const router = useNavigate()
	const { mutate: join } = useJoin()
	const { data: areas } = useReadAreas()

	const form = useForm<JoinFormData>({
		mode: 'all',
		resolver: zodResolver(joinSchema),
	})

	const onSubmit = (formValues: FieldValues) => {
		const { email, address, agreement, areaIds, nickname, password } = formValues
		const values = { email: `${email}@${address}`, agreement, areaIds, nickname, password }
		join(values)
		router('/')
	}

	const areaIds = form.watch('areaIds')
	const myArea = areaIds?.map((id: number) => areas?.find((area: { id: number }) => area.id === id)?.name)

	return (
		<section className="flex h-screen flex-col px-4 pt-16">
			<h1 className="pb-4 text-lg font-bold">회원가입</h1>
			{/* todo: <SocialloginForm />
			<hr className="my-4" /> */}

			<Form form={form} onSubmit={onSubmit} className="flex flex-col [&_label]:font-semibold">
				<div className="flex gap-4 pb-4">
					<Form.Item name="email" label="이메일" className="flex-1">
						<InputText placeholder="이메일" />
					</Form.Item>
					<p className="mt-11">@</p>
					<Form.Item name="address" label="." labelClassName="text-white" className="flex-1">
						<InputSelect options={domainList} />
					</Form.Item>
				</div>

				<Form.Item name="password" label="비밀번호">
					<InputText type="password" placeholder="비밀번호" />
				</Form.Item>

				<Form.Item name="passwordConfirm" className="pb-4 pt-2">
					<InputText type="password" placeholder="비밀번호 확인" />
				</Form.Item>

				<Form.Item name="nickname" label="닉네임" description="다른 유저와 겹치지 않도록 입력해주세요. (2~20자)" className="pb-4">
					<InputText placeholder="닉네임을 입력해주세요." />
				</Form.Item>

				<Form.Item name="areaIds" label="내 도시">
					<ul className="w-full gap-1 pb-2 flex-center">
						{myArea?.map((a, index) => (
							<li className="w-full rounded-md border border-brand-01 p-2 text-center text-brand-01" key={index}>
								{a}
							</li>
						))}
					</ul>
				</Form.Item>
				<AreaDrawer myAreaLength={myArea?.length} />

				<Form.Item name="agreement" label="약관동의" className="pt-4">
					<div className="flex flex-col gap-2 rounded-md border p-4">
						{agreement.map((items) => (
							<Form.Item name={`agreement.${items.value}`}>
								<fieldset className="flex items-center gap-2">
									<Checkbox id={items.value} />
									<label htmlFor={items.value}>{items.label}</label>
								</fieldset>
							</Form.Item>
						))}
					</div>
				</Form.Item>

				<ButtonBasic>회원가입하기</ButtonBasic>
			</Form>
		</section>
	)
}
