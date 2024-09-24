import { MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@radix-ui/react-menubar'
import { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

import { cn } from '@lib/utils'

import { Menubar as MenubarWrapper } from '@ui/_shardcn/menubar'
import { Overlay } from '@ui/index'

export function Menubar() {
	const [isOpen, setIsOpen] = useState(false)
	const [myLocation, setMyLocation] = useState('읍내동')
	const region = ['읍내동', '동천동', '구암동', '내 동네 설정']

	const onClickContent = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		setIsOpen(false)
	}

	return (
		<MenubarWrapper>
			<MenubarMenu>
				<MenubarTrigger
					className="flex items-center gap-1 bg-white font-bold hover:border-none focus-visible:outline-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					<small>{myLocation}</small>
					{isOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
				</MenubarTrigger>

				{isOpen && <Overlay onClick={onClickContent} />}

				<MenubarContent className="relative flex flex-col rounded-xl border bg-white" onClick={onClickContent}>
					{region.map((items, index) => (
						<MenubarItem
							key={index}
							onClick={() => setMyLocation(items)}
							className={cn('cursor-pointer py-2 pl-3 pr-20 text-sm', myLocation === items && 'font-extrabold')}
						>
							{items}
						</MenubarItem>
					))}
				</MenubarContent>
			</MenubarMenu>
		</MenubarWrapper>
	)
}
