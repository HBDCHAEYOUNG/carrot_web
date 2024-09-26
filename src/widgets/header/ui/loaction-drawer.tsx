import { MdClose } from 'react-icons/md'

import { cn } from '@lib/utils'

import { Button, Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@ui/index'

export function LoactionDrawer() {
	return (
		<Drawer>
			<DrawerTrigger className={cn('cursor-pointer py-2 pl-3 pr-20 text-sm outline-none')}>내 동네 설정</DrawerTrigger>
			<DrawerContent className="h-full">
				<DrawerHeader className="flex items-center justify-center">
					<DrawerClose>
						<MdClose className="fixed left-4 top-10 size-6" />
					</DrawerClose>
					<DrawerTitle>내 동네 설정</DrawerTitle>
				</DrawerHeader>
				<div className="h-full bg-gray-400"></div>
				<DrawerFooter>
					<DrawerClose>
						<Button>내동네 설정하기</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
