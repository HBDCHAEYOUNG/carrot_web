import { useForm } from 'react-hook-form'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { SiNaver } from 'react-icons/si'
import { Link } from 'react-router-dom'

import Form from '@ui/form/form'
import { InputText } from '@ui/index'

export function SignUp() {
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
		<section className="flex h-screen flex-col px-4 pt-20">
			<Link to="/auth/login">
				<MdOutlineArrowBackIos className="size-6 cursor-pointer" />
			</Link>
			<h1 className="mt-6 pb-4 text-2xl font-bold">
				안녕하세요! <br /> 휴대폰 번호로 로그인 해주세요.
			</h1>
			<p className="pb-8 text-sm leading-tight text-gray-500">
				당근은 휴대폰 번호로 로그인 해요. 번호는 <b>안전하게 보관</b>되며 어디에도 공개되지 않아요.
			</p>

			<Form form={form} onSubmit={onSubmit}>
				<Form.Item name="phone">
					<InputText type="number" placeholder="휴대폰 번호" className="mb-3 h-12 w-full" />
				</Form.Item>
				<button className="h-12 w-full rounded-sm border border-gray-300 bg-white px-3 text-lg font-bold text-gray-400 focus:border-black">
					인증문자 받기
				</button>
			</Form>

			<small className="my-8 self-center">
				휴대폰 번호가 변경되었나요?{' '}
				<Link to="#" className="cursor-pointer font-bold underline">
					이메일 계정으로 찾기
				</Link>
			</small>

			<button type="button" className="mb-2 flex h-12 w-full items-center justify-center rounded-sm border bg-[#10ad00;] px-3 text-white">
				<RiKakaoTalkFill className="mr-2 size-5" />
				네이버 아이디로 로그인
			</button>

			<button type="button" className="flex h-12 w-full items-center justify-center rounded-sm border bg-[#fcda00] px-3">
				<SiNaver className="mr-2 size-3" /> 카카오 아이디로 로그인
			</button>
		</section>
	)
}
