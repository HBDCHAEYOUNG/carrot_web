import { Link } from 'react-router-dom'

import { Button } from '@ui/index'

export function Login() {
	return (
		<div className="mx-2 flex h-screen flex-col items-center justify-center bg-white pt-12">
			<div className="flex h-full w-full flex-col items-center justify-center">
				<div className="size-48">
					<img
						src="https://about.daangn.com/static/63d3abb868d7a650b4c0383be7891252/e9ec68d0-e49d-4071-bf92-78ed3355003f_profile_daangn.png"
						alt="당근 로고"
					/>
				</div>
				<h3 className="mb-4 text-2xl font-bold">당신 근처의 당근</h3>
				<p className="text-center text-sm text-gray-500">
					동네라서 가능한 모든 것
					<br /> 지금 내 동네를 선택하고 시작해 보세요!
				</p>
			</div>
			<Button className="w-full bg-brand-01 hover:bg-brand-01 hover:brightness-125">
				<Link to="/auth/signup">시작하기</Link>
			</Button>
			<p className="py-4 text-sm text-gray-500">
				이미 계정이 있나요?{' '}
				<Link to="#" className="text-brand-01">
					로그인
				</Link>
			</p>
		</div>
	)
}
