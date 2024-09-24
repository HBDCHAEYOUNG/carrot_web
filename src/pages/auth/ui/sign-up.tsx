import { RiKakaoTalkFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import { PrevpageBtn } from '@ui/button/prevpage-btn'
import { ButtonBasic } from '@ui/index'

export function SignUp() {
	return (
		<section className="flex h-screen flex-col px-4">
			<PrevpageBtn />

			<h1 className="mt-6 pb-4 text-2xl font-bold">
				안녕하세요! <br /> 휴대폰 번호로 가입 해주세요.
			</h1>
			<small className="pb-8 text-sm leading-tight text-gray-500">
				당근은 휴대폰 번호로 가입 해요. 번호는 <b>안전하게 보관</b>되며 어디에도 공개되지 않아요.
			</small>
			<Link to="step1">
				<ButtonBasic text="당근으로 가입" className="bg-brand-01 text-white" />
			</Link>

			<div className="h-full flex-1 content-center">
				<small className="pb-2 font-bold">SNS로 가입하기</small>
				<ButtonBasic text="카카오 아이디로 가입" className="bg-[#10ad00] text-white" icon={<RiKakaoTalkFill className="mr-2 size-5" />} />
				<ButtonBasic
					text="네이버 아이디로 가입"
					className="bg-[rgb(252,218,0)] text-black"
					icon={<RiKakaoTalkFill className="mr-2 size-5" />}
				/>
			</div>
		</section>
	)
}
