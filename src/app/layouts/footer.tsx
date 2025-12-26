import { useAuthStore } from '@store/authStore'
import { GoHome as homeIcon } from 'react-icons/go'
import { PiUser as userIcon } from 'react-icons/pi'
import { Link, useLocation } from 'react-router-dom'

import { cn } from '@lib/utils'

export function Footer() {
	const { pathname } = useLocation()

	const { isLogin } = useAuthStore()

	return (
		<footer className="h-18 fixed bottom-0 z-10 flex w-full items-center justify-around bg-white p-2">
			{[
				{ icon: homeIcon, path: '/', title: '홈' },
				// { icon: chatIcon, path: '/' },
				{ icon: userIcon, path: isLogin ? '/mypage' : '/auth', title: isLogin ? '나의 당근' : '로그인' },
			].map(({ icon: Icon, path, title }) => (
				<Link key={Icon.name} to={path} className="flex-col flex-center">
					<Icon className={cn('size-9 p-1', pathname === path && 'fill-brand-01')} />
					<p className={cn('text-xs', pathname === path && 'text-brand-01')}>{title}</p>
				</Link>
			))}
		</footer>
	)
}
