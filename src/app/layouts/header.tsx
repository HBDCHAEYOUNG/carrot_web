import { useHeaderStore } from '@store/headerStore'
import { useState } from 'react'
import { CiBellOn, CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'

import { Menubar, SearchForm } from '@widgets/header'

import { Logo } from '@icons/logo'

export function Header() {
	const [search, setSearch] = useState(false)
	const { toggleHeader } = useHeaderStore()
	const onClickSearch = () => {
		setSearch((prev) => !prev)
	}

	return (
		<header className="fixed z-10 flex w-full items-center justify-between bg-white p-2">
			<Menubar />
			<Link to="/">
				<Logo className="h-6 w-auto" />
			</Link>
			<div className="flex items-center gap-2">
				<CiSearch className="size-5 cursor-pointer" onClick={onClickSearch} />
				<Link to="/notice">
					<CiBellOn className="size-5 cursor-pointer" onClick={() => toggleHeader()} />
				</Link>
			</div>

			{search && <SearchForm onClickSearch={onClickSearch} />}
		</header>
	)
}
