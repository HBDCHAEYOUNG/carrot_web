import { SocialloginForm } from '@widgets/header'

export function SignUp() {
	return (
		<section className="flex h-screen flex-col px-4 pt-16">
			<h1 className="pb-4 text-lg font-bold">회원가입</h1>
			<SocialloginForm />
			<hr className="my-4" />
		</section>
	)
}
