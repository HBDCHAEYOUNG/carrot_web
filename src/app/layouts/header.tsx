import { useState } from 'react'
import { CiBellOn, CiSearch } from 'react-icons/ci'

import { Menubar, SearchForm } from '@widgets/header'

import { Logo } from '@icons/logo'

function Header() {
	const [search, setSearch] = useState(false)

	const onClickSearch = () => {
		setSearch((prev) => !prev)
	}

	return (
		<header className="my-4 flex w-full items-center justify-between px-2">
			<Menubar />
			<Logo />
			<div className="flex items-center gap-2">
				<CiSearch className="h-6 w-6 cursor-pointer" onClick={onClickSearch} />
				<CiBellOn className="h-6 w-6 cursor-pointer" />
			</div>

			{search && <SearchForm onClickSearch={onClickSearch} />}
		</header>
	)
}

export default Header
