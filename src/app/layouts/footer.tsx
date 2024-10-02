import { CiLogin as loginIcon } from 'react-icons/ci'
import { GoHome as homeIcon } from 'react-icons/go'
import { PiChatsCircleLight as chatIcon, PiUser as userIcon } from 'react-icons/pi'
import { Link } from 'react-router-dom'

export function Footer() {
	const isLogin = true

	return (
		<footer className="h-18 fixed bottom-0 z-10 flex w-full items-center justify-around bg-white p-2">
			{[
				{ icon: homeIcon, path: '/' },
				{ icon: chatIcon, path: '/' },
				{ icon: isLogin ? userIcon : loginIcon, path: isLogin ? '/mypage' : '/auth' },
			].map(({ icon: Icon, path }) => (
				<Link key={Icon.name} to={path}>
					<Icon className="size-9 p-1" />
				</Link>
			))}
		</footer>
	)
}
