import { zodResolver } from '@hookform/resolvers/zod'
import { useReadAuth, useUpdateAuthArea } from '@pages/mypage'
import { MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@radix-ui/react-menubar'
import { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { MdClose, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

import { cn } from '@lib/utils'

import { Menubar as MenubarWrapper } from '@ui/_shardcn/menubar'
import Form from '@ui/form/form'
import { Button, Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, Overlay } from '@ui/index'

import { AreaFormData, areaSchema } from '../model/area.schema'
import { useReadAreas } from '../model/use-area'

export function Areamenu() {
	const { data: user } = useReadAuth()
	const { data: areasData } = useReadAreas()
	const { mutate: updateAuthArea } = useUpdateAuthArea()

	const form = useForm<AreaFormData>({
		mode: 'all',
		resolver: zodResolver(areaSchema),
		defaultValues: {
			areaIds: [],
		},
	})
	const areaIds = form.watch('areaIds')
	const { invalid } = form.getFieldState('areaIds', form.formState)
	const disabled = invalid

	const [isOpen, setIsOpen] = useState(false)

	const onClickContent = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		setIsOpen(false)
	}

	const onclickRegion = (item: { id: number; name: string }) => {
		const find = areaIds.find((f: any) => f.id === item.id)

		if (find) {
			if (areaIds.length === 1) {
				return alert('내 장소는 최소 1개 이상 선택해야 해요!')
			}

			form.setValue(
				'areaIds',
				areaIds.filter((f: any) => f.id !== item.id),
			)
		} else {
			if (areaIds.length === 2) {
				return alert('내 장소는 최대 2개까지 선택할 수 있어요!')
			}
			form.setValue('areaIds', [...areaIds, item])
		}

		form.trigger('areaIds')
	}

	const onclickDelete = (id: number) => {
		if (areaIds.length === 1) {
			return alert('내 장소는 최소 1개 이상 선택해야 해요!')
		}

		form.setValue(
			'areaIds',
			areaIds.filter((f: any) => f.id !== id),
		)
	}

	const onSubmit = async (values: FieldValues) => {
		const { areaIds } = values as AreaFormData
		const ids = areaIds.map((f) => f.id)

		try {
			await updateAuthArea(ids)
			alert('내 동네가 설정되었어요!')
			setIsOpen(false)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		if (user) {
			form.setValue('areaIds', user.area)
		}
	}, [user, form])

	return (
		<MenubarWrapper>
			<MenubarMenu>
				<MenubarTrigger className="flex items-center gap-1 bg-white font-bold hover:border-none focus-visible:outline-none">
					<small className="whitespace-nowrap text-lg">{user?.area[0].name}</small>
					{isOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
				</MenubarTrigger>

				{isOpen && <Overlay onClick={onClickContent} />}

				<MenubarContent className="relative flex flex-col rounded-xl border bg-white">
					{user?.area?.map((items, index) => (
						<MenubarItem
							key={index}
							className={cn('cursor-pointer py-2 pl-3 pr-20 text-sm outline-none', user?.area[0].id === items.id && 'font-extrabold')}
						>
							{items.name}
						</MenubarItem>
					))}

					<Drawer open={isOpen} onOpenChange={setIsOpen}>
						<DrawerTrigger className={cn('cursor-pointer py-2 pl-3 pr-20 text-sm outline-none')}>내 동네 설정</DrawerTrigger>

						<DrawerContent className="h-full">
							<DrawerHeader className="flex items-center justify-center">
								<DrawerClose>
									<MdClose className="fixed left-4 top-10 size-6" />
								</DrawerClose>
								<DrawerTitle>내 동네 설정</DrawerTitle>
							</DrawerHeader>

							<DrawerFooter className="mt-0 overflow-auto">
								<Form form={form} onSubmit={onSubmit}>
									<ul className="grid grid-cols-3 items-center justify-center gap-1">
										{areasData?.map((item) => (
											<li
												key={item.id}
												className={cn(
													'cursor-pointer border-b-2 border-transparent p-1 text-center hover:border-black',
													areaIds.find((f: any) => f.id === item.id) &&
														'rounded-md bg-brand-01 text-white hover:border-transparent hover:opacity-80',
												)}
												onClick={() => onclickRegion(item)}
											>
												{item.name}
											</li>
										))}
									</ul>

									<div className="flex flex-col gap-2">
										<strong className="text-sm">내 동네</strong>

										{user && user?.area.length < 1 && <small className="italic text-brand-01">내 장소를 추가하려면 선택해주세요!</small>}

										<div className="flex gap-2">
											{areaIds?.map((item, index) => (
												<button
													type="button"
													key={index}
													className="relative flex w-full items-center justify-center rounded-md bg-brand-01 px-4 py-2 text-white hover:brightness-125"
													onClick={() => onclickDelete(item.id)}
												>
													<p>{item.name}</p>
													<MdClose className="absolute right-4" />
												</button>
											))}
										</div>
									</div>

									<Button disabled={disabled} className="mt-2 w-full bg-brand-01 text-white disabled:bg-gray-01">
										저장하기
									</Button>
								</Form>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</MenubarContent>
			</MenubarMenu>
		</MenubarWrapper>
	)
}
