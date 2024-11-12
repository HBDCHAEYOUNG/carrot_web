import { z } from 'zod'

export const joinSchema = z
	.object({
		id: z.string({ message: '필수 입력 항목입니다.' }).regex(/^[a-zA-Z0-9]+$/, '특수문자는 사용할 수 없습니다'),
		address: z.string({ message: '필수 입력 항목입니다.' }).regex(/^[a-z]+\.[a-z]{2,}$/, '유효하지 않은 도메인 형식입니다.'),
		password: z.string({ message: '필수 입력 항목입니다.' }).min(6, '6자 이상의 비밀번호를 입력해주세요.'),
		passwordConfirm: z.string({ message: '필수 입력 항목입니다.' }),
		nickname: z
			.string()
			.min(2, '2자 이상 입력해주세요.')
			.max(20, '20자 이하로 입력해주세요.')
			.regex(/^[a-zA-Z0-9가-힣]+$/, '특수문자는 사용할 수 없습니다.'),
		areaIds: z.array(z.number()).min(1, '도시를 선택해주세요.'),
		agreement: z.object({
			adultAgree: z.boolean().refine((val) => val === true, {
				message: '14세 이상 동의를 체크해주세요.',
			}),
			termsAgree: z.boolean().refine((val) => val === true, {
				message: '이용약관 동의를 체크해주세요.',
			}),
		}),
	})
	.refine((data) => data.password === data.passwordConfirm, {
		message: '비밀번호가 일치하지 않습니다.',
		path: ['passwordConfirm'],
	})

export type JoinFormData = z.infer<typeof joinSchema>
