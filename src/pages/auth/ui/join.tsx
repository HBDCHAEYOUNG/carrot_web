import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'

import { AreaDrawer } from '@entities/join'

import { useReadAreas } from '@widgets/header'

import Form from '@ui/form/form'
import { ButtonBasic, Checkbox, InputSelect, InputText } from '@ui/index'

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
	const { mutate: join } = useJoin()
	const { data: areas } = useReadAreas()

	const formSchema: any = z.object({
		email: z.string().regex(/^[a-zA-Z0-9]+$/, '특수문자는 사용할 수 없습니다'),
		passwordConfirm: z.string().refine((val) => val === form.getValues().password, {
			message: '비밀번호가 일치하지 않습니다.',
		}),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		mode: 'all',
		resolver: zodResolver(formSchema),
	})

	const onSubmit = (formValues: FieldValues) => {
		const { email, address, agreement, areaIds, nickname, password } = formValues
		const values = { email: `${email}@${address}`, agreement, areaIds, nickname, password }
		join(values)
	}

	const areaIds = form.watch('areaIds')
	console.log(areaIds)
	const myArea = areaIds?.map((id: number) => areas?.find((area: { id: number }) => area.id === id)?.name)
	console.log(myArea)
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
					<Form.Item name="address" className="flex-1">
						<InputSelect options={domainList} />
					</Form.Item>
				</div>
				<Form.Item name="password" label="비밀번호" description="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.">
					<InputText type="password" placeholder="비밀번호" />
				</Form.Item>

				<Form.Item name="passwordConfirm" label="비밀번호 확인">
					<InputText type="password" placeholder="비밀번호 확인" />
				</Form.Item>

				<Form.Item name="nickname" label="닉네임" description="다른 유저와 겹치지 않도록 입력해주세요. (2~20자)">
					<InputText placeholder="닉네임을 입력해주세요." />
				</Form.Item>

				<Form.Item name="areaIds" label="내 도시" description="내 도시를 선택해주세요.">
					<>
						<ul className="w-full gap-1 flex-center">
							{myArea?.map((a: string, index: number) => (
								<li className="w-full rounded-md border border-brand-01 p-2 text-center text-brand-01" key={index}>
									{a}
								</li>
							))}
						</ul>
						<AreaDrawer myAreaLength={myArea?.length} />
					</>
				</Form.Item>

				<div className="flex flex-col gap-2">
					<label>약관동의</label>
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
				</div>

				<ButtonBasic>회원가입하기</ButtonBasic>
			</Form>
		</section>
	)
}
