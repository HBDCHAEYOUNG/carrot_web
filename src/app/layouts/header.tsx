import { useSearchStore } from '@pages/home'
import { useAuthStore } from '@store/authStore'
import { CiBellOn, CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'

import { AreaMenu, SearchForm } from '@widgets/header'

import { Logo } from '@icons/logo'

export function Header() {
	const { searchMode, setSearchMode } = useSearchStore()
	const { isLogin } = useAuthStore()
	console.log(isLogin)
	return (
		<header className="fixed z-10 flex w-full items-center justify-between bg-white pt-4 common-padding">
			{/* <AreaMenu /> */}
			<AreaMenu />
			<Link to="/">
				<Logo className="h-8 w-auto" />
			</Link>
			<div className="flex items-center gap-2">
				<CiSearch className="size-6 cursor-pointer" onClick={() => setSearchMode()} />
				<Link to="/notice">
					<CiBellOn className="size-6 cursor-pointer" />
				</Link>
			</div>

			{searchMode && <SearchForm />}
		</header>
	)
}
