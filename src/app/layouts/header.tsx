import useSearchStore from '@store/searchStore'
import { CiBellOn, CiSearch } from 'react-icons/ci'

import { Menubar } from '@widgets/header'

import { Logo } from '@icons/logo'

function Header() {
	const { searchMode, toggleSearchMode } = useSearchStore()

	return (
		<header className="flex w-full items-center justify-between">
			<Menubar />

			<Logo />

			<div className="flex">
				<CiSearch className="h-6 w-6" onClick={toggleSearchMode} />
				{searchMode && <p>안녕</p>}
				<CiBellOn className="h-6 w-6" />
			</div>
		</header>
	)
}

export default Header
