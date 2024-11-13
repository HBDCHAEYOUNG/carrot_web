import { zodResolver } from '@hookform/resolvers/zod'
import { useAuthStore } from '@store/authStore'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { AreaDrawer } from '@entities/join'

import { useReadAreas } from '@widgets/header'

import Form from '@ui/form/form'
import { ButtonBasic, InputSelect, InputText } from '@ui/index'

import { JoinFormData, joinSchema } from '../model/join.schema'
import { useCheckEmail, useCheckNickname, useJoin } from '../model/use-join'
import { useLogin } from '../model/use-login'

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

	const { mutateAsync: join } = useJoin()
	const { mutateAsync: checkEmail, error: checkEmailError } = useCheckEmail()
	const { mutateAsync: checkNickname, error: checkNicknameError } = useCheckNickname()
	const { mutateAsync: login } = useLogin()
	const { data: areas } = useReadAreas()

	const { setLogin } = useAuthStore()

	const form = useForm<JoinFormData>({
		mode: 'all',
		resolver: zodResolver(joinSchema),
	})

	const onClickCheckEmail = async () => {
		try {
			const { id, address } = form.getValues()
			const email = `${id}@${address}`
			await checkEmail({ email })
			alert('사용 가능한 이메일입니다.')
		} catch (error: any) {
			console.log(error.response.data.message)
		}
	}

	const onClickCheckNickname = async () => {
		try {
			const nickname = form.getValues('nickname')
			await checkNickname({ nickname })
			alert('사용 가능한 닉네임입니다.')
		} catch (error: any) {
			console.log(error.response.data.message)
		}
	}
	const onSubmit = async (formValues: FieldValues) => {
		try {
			const { id, address, password, nickname, areaIds, agreement } = formValues
			const email = `${id}@${address}`
			const values = { email, password, nickname, areaIds, agreement }
			await join(values)
			alert('회원가입이 완료되었습니다. 바로 로그인 됩니다.')
			const token = await login({ email, password })
			setLogin(token)
			router('/')
		} catch (error: any) {
			console.log(111, error.response.data.message)
		}
	}

	const areaIds = form.watch('areaIds')
	const myArea = areaIds?.map((id: number) => areas?.find((area: { id: number }) => area.id === id)?.name)

	return (
		<section className="flex h-screen flex-col px-4 pt-16">
			<h1 className="pb-4 text-lg font-bold">회원가입</h1>
			{/* todo: <SocialloginForm />
			<hr className="my-4" /> */}

			<Form form={form} onSubmit={onSubmit} className="flex flex-col">
				<div className="flex gap-4">
					<Form.Item name="id" label="이메일" className="flex-1">
						<InputText placeholder="이메일" />
					</Form.Item>
					<p className="mt-11">@</p>
					<Form.Item name="address" label="." labelClassName="text-white" className="flex-1">
						<InputSelect options={domainList} />
					</Form.Item>
				</div>
				{checkEmailError && <p className="text-red-500">{checkEmailError.response.data.message}</p>}
				<ButtonBasic onClick={onClickCheckEmail} className="mb-4">
					이메일 중복 확인
				</ButtonBasic>

				<Form.Item name="password" label="비밀번호">
					<InputText type="password" placeholder="비밀번호" />
				</Form.Item>

				<Form.Item name="passwordConfirm" className="pb-4 pt-2">
					<InputText type="password" placeholder="비밀번호 확인" />
				</Form.Item>

				<Form.Item name="nickname" label="닉네임">
					<InputText placeholder="닉네임을 입력해주세요." />
				</Form.Item>
				{checkNicknameError && <p className="text-red-500">{checkNicknameError.response.data.message}</p>}
				<ButtonBasic onClick={onClickCheckNickname} className="mb-4">
					닉네임 중복 확인
				</ButtonBasic>

				<Form.Item name="areaIds" label="내 도시">
					<div className="w-full gap-1 pb-2 flex-center">
						{myArea?.map((a, index) => (
							<InputText
								type="text"
								value={a}
								readOnly
								className="w-full rounded-md border border-brand-01 p-2 text-center text-brand-01"
								key={index}
							/>
						))}
					</div>
				</Form.Item>

				<AreaDrawer myAreaLength={myArea?.length} />

				<label className="pb-2 pt-4 text-sm font-semibold">내 도시</label>
				<div className="flex flex-col gap-2 rounded-md border p-4">
					{agreement.map((items) => (
						<Form.Item name={`agreement.${items.value}`}>
							<fieldset className="flex items-center gap-2">
								<InputText type="checkbox" name={`agreement.${items.value}`} id={items.value} className="size-4" />
								<label htmlFor={items.value}>{items.label}</label>
							</fieldset>
						</Form.Item>
					))}
				</div>

				<ButtonBasic type="submit">회원가입하기</ButtonBasic>
			</Form>
		</section>
	)
}
