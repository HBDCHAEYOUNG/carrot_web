import { MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '@radix-ui/react-menubar'
import useSearchStore from '@store/searchStore'
import { CiBellOn, CiSearch } from 'react-icons/ci'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'

import { Menubar } from '@ui/_shardcn/menubar'

import { Logo } from '@icons/logo'

function Header() {
	const region = ['읍내동', '동천동', '구암동']
	const { searchMode, toggleSearchMode } = useSearchStore()

	return (
		<header className="flex w-full items-center justify-between">
			<Menubar>
				<MenubarMenu>
					<MenubarTrigger>
						내 동네 <MdOutlineKeyboardArrowUp />
					</MenubarTrigger>
					<MenubarContent>
						<MenubarSeparator />
						{region.map((items) => (
							<MenubarItem>{items}</MenubarItem>
						))}
						<MenubarItem>내 동네 설정</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>

			<Logo />

			<div>
				<CiSearch className="h-6 w-6" onClick={toggleSearchMode} />
				{searchMode && <p>안녕</p>}
				<CiBellOn className="h-6 w-6" />
			</div>
		</header>
	)
}

export default Header
