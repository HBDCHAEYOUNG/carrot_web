import { IconType } from 'react-icons/lib'
import { MdOutlineArrowBackIos } from 'react-icons/md'

import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger } from '@ui/index'

interface DeallistDrawerProps {
	title: string
	icon: IconType
	content: React.ReactNode
}

export function DeallistDrawer({ icon: Icon, title, content }: DeallistDrawerProps) {
	return (
		<Drawer key={title}>
			<DrawerTrigger className="flex cursor-pointer items-center gap-2">
				<Icon className="size-6" />
				<span className="text-lg">{title}</span>
			</DrawerTrigger>
			<DrawerContent className="h-full rounded-none">
				<DrawerHeader className="flex justify-center border-b border-gray-01 pb-6">
					<DrawerClose>
						<MdOutlineArrowBackIos className="fixed left-4 top-11 size-6" />
					</DrawerClose>
					<h3 className="text-lg font-bold">{title}</h3>
				</DrawerHeader>
				{content}
			</DrawerContent>
		</Drawer>
	)
}
