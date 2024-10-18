import { useReadAuth, useUpdateAuthArea } from '@pages/mypage'
import { MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@radix-ui/react-menubar'
import { useAuthStore } from '@store/authStore'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdClose, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

import { cn } from '@lib/utils'

import { Menubar as MenubarWrapper } from '@ui/_shardcn/menubar'
import { Button, Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, Overlay } from '@ui/index'

import { useReadAreas } from '../model/use-area'

export function AreaMenu() {
	const { token } = useAuthStore()

	const { data: user } = useReadAuth(token)
	const { data: areasData } = useReadAreas()
	const { mutate: updateAuthArea } = useUpdateAuthArea(token)
	console.log(user?.area.length)
	const [isOpen, setIsOpen] = useState(false)
	const onClickContent = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		setIsOpen(false)
	}

	const onclickRegion = (item: { id: number; name: string }) => {
		updateAuthArea([item.id])
	}

	const onclickDelete = () => {
		if (user?.area.length === 1) {
			alert('내 장소는 최소 1개 이상 선택해야 해요!')
			return
		}
	}

	return (
		<MenubarWrapper>
			<MenubarMenu>
				<MenubarTrigger
					className="flex items-center gap-1 bg-white font-bold hover:border-none focus-visible:outline-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					<small className="whitespace-nowrap text-lg">{user?.area[0].name}</small>
					{isOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
				</MenubarTrigger>

				{isOpen && <Overlay onClick={onClickContent} />}

				<MenubarContent className="relative flex flex-col rounded-xl border bg-white" onClick={onClickContent}>
					{user?.area?.map((items, index) => (
						<MenubarItem
							key={index}
							onClick={() => updateAuthArea([items.id])}
							className={cn('cursor-pointer py-2 pl-3 pr-20 text-sm outline-none', user?.area[0].id === items.id && 'font-extrabold')}
						>
							{items.name}
						</MenubarItem>
					))}

					<Drawer>
						<DrawerTrigger className={cn('cursor-pointer py-2 pl-3 pr-20 text-sm outline-none')}>내 동네 설정</DrawerTrigger>
						<DrawerContent className="h-full">
							<DrawerHeader className="flex items-center justify-center">
								<DrawerClose>
									<MdClose className="fixed left-4 top-10 size-6" />
								</DrawerClose>
								<DrawerTitle>내 동네 설정</DrawerTitle>
							</DrawerHeader>
							<ul className="flex h-full flex-col items-center justify-center bg-gray-100">
								{areasData?.map((item) => (
									<li key={item.id} className="cursor-pointer hover:border-b-2 hover:border-black" onClick={() => onclickRegion(item)}>
										{item.name}
									</li>
								))}
							</ul>
							<DrawerFooter>
								<div className="flex flex-col gap-2">
									<strong className="text-sm">내 동네</strong>
									{user?.area?.length < 2 && <small className="italic text-brand-01">내 장소를 추가하려면 선택해주세요!</small>}
									<div className="flex gap-2">
										{user?.area?.map((item, index) => (
											<button
												key={index}
												className="flex w-full items-center justify-between rounded-md bg-brand-01 px-4 py-2 text-white hover:brightness-125"
											>
												<p>{item.name}</p>
												<MdClose onClick={() => onclickDelete(item.name)} />
											</button>
										))}
										{user?.area.length < 2 && (
											<button className="flex w-full items-center justify-center rounded-md bg-gray-01 px-4 py-2 hover:brightness-95">
												<AiOutlinePlus />
											</button>
										)}
									</div>
								</div>
								<DrawerClose>
									<Button className="bg- w-full bg-gray-01 text-black hover:bg-gray-01 hover:brightness-95">저장하기</Button>
								</DrawerClose>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</MenubarContent>
			</MenubarMenu>
		</MenubarWrapper>
	)
}
