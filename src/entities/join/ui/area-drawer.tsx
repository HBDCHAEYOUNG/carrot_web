import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { MdClose } from 'react-icons/md'

import { useReadAreas } from '@widgets/header'

import { cn } from '@lib/utils'

import { ButtonBasic, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTrigger } from '@ui/index'

export function AreaDrawer() {
	const form = useFormContext()
	const { data: area } = useReadAreas()

	const [myArea, setMyArea] = useState<{ id: number; name: string }[]>([])
	const [isOpen, setIsOpen] = useState(false)

	const onClickSelectArea = (area: { id: number; name: string }) => {
		if (myArea?.find((a) => a.id === area.id)) return
		else if (myArea?.length === 2) {
			alert('최대 2개까지 선택할 수 있어요!')
		} else if (myArea?.length === 1 || myArea?.length === 0) {
			setMyArea([...myArea, area])
		}
	}
	const onClickDeleteArea = (area: { id: number; name: string }) => {
		setMyArea(myArea?.filter((a) => a.id !== area.id))
	}

	const onClickApdateArea = () => {
		if (myArea?.length === 0) {
			alert('동네를 선택해주세요!')
		} else {
			const ids = myArea?.map((a) => a.id)
			if (!ids) return
			form.setValue('areaIds', ids)
			setIsOpen(false)
		}
	}

	return (
		<Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
			<DrawerTrigger className="p-0">
				<p className="cursor-pointertext-sm block">도시 설정하기</p>
			</DrawerTrigger>
			<DrawerContent className="h-full">
				<DrawerHeader className="text-lg font-semibold">
					<DrawerClose className="fixed top-11">
						<MdClose />
					</DrawerClose>
					도시 설정하기
				</DrawerHeader>
				<section className="flex flex-col gap-2 p-4">
					<DrawerDescription className="text-md">
						<ul className="grid grid-cols-3 gap-4 p-4 pt-0">
							{area?.map((area) => (
								<li
									className={cn(
										'w-full cursor-pointer rounded-md bg-gray-01 p-2 text-center hover:brightness-95',
										myArea?.find((a) => a.id === area.id) && 'bg-brand-01 text-white',
									)}
									key={area.id}
									onClick={() => onClickSelectArea(area)}
								>
									{area.name}
								</li>
							))}
						</ul>
					</DrawerDescription>
					<h1 className="py-2 text-lg font-semibold">내 동네</h1>
					{myArea?.length === 0 && <p className="text-sm">내 장소를 추가해주세요!</p>}

					<div className="flex gap-2">
						{myArea?.map((area) => (
							<ButtonBasic key={area.id} onClick={() => onClickDeleteArea(area)}>
								{area.name}
							</ButtonBasic>
						))}
					</div>
				</section>
				<DrawerFooter>
					<ButtonBasic onClick={onClickApdateArea}>저장하기</ButtonBasic>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
