import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsCameraFill, BsFillPlusCircleFill } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

import { useReadAreas } from '@widgets/header'

import { cn } from '@lib/utils'

import Form from '@ui/form/form'
import { Button, Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerPortal, DrawerTrigger, InputText } from '@ui/index'

export function AddProductDrawer() {
	const form = useForm({
		mode: 'all',
	})

	const { data: areas } = useReadAreas()

	const [sellType, setSellType] = useState<'sale' | 'share'>('sale')

	console.log(111, form.watch())

	return (
		<Drawer direction="right">
			<DrawerTrigger>
				<BsFillPlusCircleFill className="fixed bottom-20 right-6 size-10 cursor-pointer text-brand-01" />
			</DrawerTrigger>
			<DrawerPortal>
				<DrawerContent className="h-screen common-padding">
					<DrawerHeader className="px-0 pb-8">
						<DrawerClose className="fixed top-11">
							<MdClose />
						</DrawerClose>
						상품 등록하기
					</DrawerHeader>

					<Form form={form} onSubmit={() => {}} className="flex max-h-[calc(100vh-10rem)] flex-col gap-8 overflow-y-auto">
						<ul className="flex">
							<li className="flex w-fit border p-4">
								<BsCameraFill className="size-6" />
							</li>
						</ul>

						<Form.Item name="title" label="제목">
							<InputText name="title" placeholder="제목" className="mt-4" />
						</Form.Item>

						<div>
							<h3>거래방식</h3>

							<button
								onClick={() => setSellType('sale')}
								className={cn('mr-4 mt-4 rounded-2xl border px-2 py-1', {
									'bg-brand-01 text-white': sellType === 'sale',
								})}
							>
								판매하기
							</button>
							<button
								onClick={() => setSellType('share')}
								className={cn('mt-4 rounded-2xl border px-2 py-1', {
									'bg-brand-01 text-white': sellType === 'share',
								})}
							>
								나눔하기
							</button>
							<Form.Item name="price">
								<InputText name="price" type="number" placeholder="가격을 입력해주세요." className="mt-4" />
							</Form.Item>
						</div>

						<Form.Item name="description" label="자세한 설명">
							<textarea
								name="description"
								id="description"
								className="mt-4 min-h-60 w-full rounded-md border border-gray-300 p-4"
								placeholder={`${areas?.[0].name}에 올릴 게시글 내용을 작성해 주세요. (판매금지 물품은 게시가 제한될 수 있어요.) \n신뢰할 수 있는`}
							></textarea>
						</Form.Item>

						<DrawerFooter className="w-full flex-row justify-center gap-2">
							<Button className="flex-grow bg-gray-01 text-black">초기화</Button>
							<DrawerClose className="flex-grow-[3]">
								<Button className="w-full bg-brand-01">적용하기</Button>
							</DrawerClose>
						</DrawerFooter>
					</Form>
				</DrawerContent>
			</DrawerPortal>
		</Drawer>
	)
}
