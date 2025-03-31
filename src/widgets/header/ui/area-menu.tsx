import { useReadAuth } from '@pages/mypage'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import { AreaDrawer } from '@entities/header'

import { cn } from '@lib/utils'

import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from '@ui/_shardcn/menubar'

export function AreaMenu() {
	const { data: auth } = useReadAuth()
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger className="text-md pl-0 focus:bg-white data-[state=open]:bg-white">
					<p className="pr-2">{auth?.area[0].name}</p>
					<MdOutlineKeyboardArrowDown />
				</MenubarTrigger>
				<MenubarContent className="p-2">
					{auth?.area?.map((area) => (
						<p className={cn('cursor-pointer p-2', area.id === auth?.area[0]?.id && 'font-semibold')} key={area.id}>
							{area.name}
						</p>
					))}

					<AreaDrawer />
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	)
}
