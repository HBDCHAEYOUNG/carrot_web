import { PropsWithChildren } from 'react'

import { CarouselItem } from '@ui/_shardcn/carousel'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@ui/_shardcn/drawer'

interface CarouselDrawerProps {
	title: string
}

export function CarouselDrawer({ children, title }: PropsWithChildren<CarouselDrawerProps>) {
	return (
		<Drawer>
			<CarouselItem className="basis-auto">
				<DrawerTrigger key={title} className="text-md mt-4 cursor-pointer text-nowrap rounded-full bg-gray-01 p-1 px-3 outline-none">
					{title}
				</DrawerTrigger>
			</CarouselItem>

			<DrawerContent className="px-4">
				<DrawerHeader className="border-b border-gray-01 py-6 flex-center">
					<DrawerTitle>{title}</DrawerTitle>
				</DrawerHeader>

				{children}

				{/* <DrawerFooter className="w-full flex-row justify-center gap-2">
				<Button className="flex-grow bg-gray-01 text-black">초기화</Button>
				<DrawerClose className="flex-grow-[3]">
					<Button className="w-full bg-brand-01">적용하기</Button>
				</DrawerClose>
				</DrawerFooter> */}
			</DrawerContent>
		</Drawer>
	)
}
