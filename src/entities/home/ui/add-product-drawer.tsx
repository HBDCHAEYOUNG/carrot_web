import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsCameraFill, BsFillPlusCircleFill } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

import { useReadAreas } from '@widgets/header'

import { cn } from '@lib/utils'

import Form from '@ui/form/form'
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger, InputText } from '@ui/index'

export function AddProductDrawer() {
	const form = useForm()
	const { data: areas } = useReadAreas()
	const [sellType, setSellType] = useState<'sell' | 'share'>('sell')
	return (
		<Drawer direction="right">
			<DrawerTrigger>
				<BsFillPlusCircleFill className="fixed bottom-20 right-6 size-10 cursor-pointer text-brand-01" />
			</DrawerTrigger>

			<DrawerContent className="h-screen common-padding">
				<DrawerHeader className="px-0 pb-8">
					<DrawerClose className="fixed top-11">
						<MdClose />
					</DrawerClose>
					상품 등록하기
				</DrawerHeader>

				<Form form={form} onSubmit={() => {}} className="flex flex-col gap-8">
					<ul className="flex">
						<li className="flex w-fit border p-4">
							<BsCameraFill className="size-6" />
						</li>
					</ul>

					<section>
						<h3>제목</h3>
						<InputText placeholder="제목" className="mt-4" />
					</section>

					<section>
						<h3>거래방식</h3>

						<button
							onClick={() => setSellType('sell')}
							className={cn('mr-4 mt-4 rounded-2xl border px-2 py-1', {
								'bg-brand-01 text-white': sellType === 'sell',
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
						<InputText placeholder="가격을 입력해주세요." className="mt-4" />
					</section>

					<section>
						<h3>자세한 설명</h3>
						{/* <InputText
							placeholder={`${areas?.[0].name}에 올릴 게시글 내용을 작성해 주세요. (판매금지 물품은 게시가 제한될 수 있어요.)
						
						신뢰할 수 있는`}
							className="mt-4 h-60"
						/> */}
						<textarea name="" id="" className="w-full">
							{areas?.[0].name}에 올릴 게시글 내용을 작성해 주세요. (판매금지 물품은 게시가 제한될 수 있어요.) 신뢰할 수 있는
						</textarea>
					</section>
				</Form>
			</DrawerContent>
		</Drawer>
	)
}
