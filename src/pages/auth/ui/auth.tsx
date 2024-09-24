import { Link } from 'react-router-dom'

import { PrevpageBtn } from '@ui/button/prevpage-btn'
import { ButtonBasic } from '@ui/index'

export function Auth() {
	return (
		<section className="flex h-screen flex-col items-center bg-white px-4">
			<PrevpageBtn />
			<div className="flex h-full w-full flex-col items-center justify-center">
				<picture className="size-48">
					<img
						src="https://about.daangn.com/static/63d3abb868d7a650b4c0383be7891252/e9ec68d0-e49d-4071-bf92-78ed3355003f_profile_daangn.png"
						alt="당근 로고"
					/>
				</picture>
				<h1 className="mb-4 text-2xl font-bold">당신 근처의 당근</h1>
				<p className="mb-10 text-center text-sm text-gray-500">
					동네라서 가능한 모든 것
					<br /> 지금 내 동네를 선택하고 시작해 보세요!
				</p>
			</div>
			<Link to="/auth/signup" className="block w-full pb-2">
				<ButtonBasic className="bg-brand-01 text-white" text="시작하기"></ButtonBasic>
			</Link>

			<small className="pb-10 text-gray-500">
				이미 계정이 있나요?
				<Link to="/auth/login" className="ml-1 cursor-pointer text-brand-01 hover:underline hover:brightness-125">
					로그인
				</Link>
			</small>
		</section>
	)
}
