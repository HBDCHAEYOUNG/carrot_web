import { MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@radix-ui/react-menubar'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdClose, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

import { cn } from '@lib/utils'

import { Menubar as MenubarWrapper } from '@ui/_shardcn/menubar'
import { Button, Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, Overlay } from '@ui/index'

import { useReadAreas } from '../model/use-area'

export function Menubar() {
	const { data: areasData } = useReadAreas()

	const [isOpen, setIsOpen] = useState(false)
	const [myLocation, setMyLocation] = useState('서울')
	const [mylocationList, setMyLocationList] = useState(['서울', '대구'])

	const onClickContent = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		setIsOpen(false)
	}

	const onclickRegion = (item: string) => {
		if (mylocationList.length === 2) {
			alert('내 장소는 2개만 저장할 수 있어요!')
			return
		}
		if (mylocationList.includes(item)) {
			alert('이미 선택한 장소에요!')
			return
		}
		setMyLocationList([...mylocationList, item])
	}

	const onclickDelete = (item: string) => {
		if (mylocationList.length === 1) {
			alert('내 장소는 최소 1개 이상 선택해야 해요!')
			return
		}
		setMyLocationList(mylocationList.filter((items) => items !== item))
	}

	return (
		<MenubarWrapper>
			<MenubarMenu>
				<MenubarTrigger
					className="flex items-center gap-1 bg-white font-bold hover:border-none focus-visible:outline-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					<small className="whitespace-nowrap">{myLocation}</small>
					{isOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
				</MenubarTrigger>

				{isOpen && <Overlay onClick={onClickContent} />}

				<MenubarContent className="relative flex flex-col rounded-xl border bg-white" onClick={onClickContent}>
					{mylocationList.map((items, index) => (
						<MenubarItem
							key={index}
							onClick={() => setMyLocation(items)}
							className={cn('cursor-pointer py-2 pl-3 pr-20 text-sm outline-none', myLocation === items && 'font-extrabold')}
						>
							{items}
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
									<li key={item.id} className="cursor-pointer hover:border-b-2 hover:border-black" onClick={() => onclickRegion(item.name)}>
										{item.name}
									</li>
								))}
							</ul>
							<DrawerFooter>
								<div className="flex flex-col gap-2">
									<strong className="text-sm">내 동네</strong>
									{mylocationList.length < 2 && <small className="italic text-brand-01">내 장소를 추가하려면 선택해주세요!</small>}
									<div className="flex gap-2">
										{mylocationList.map((item) => (
											<button className="flex w-full items-center justify-between rounded-md bg-brand-01 px-4 py-2 text-white hover:brightness-125">
												<p>{item}</p>
												<MdClose onClick={() => onclickDelete(item)} />
											</button>
										))}
										{mylocationList.length < 2 && (
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
