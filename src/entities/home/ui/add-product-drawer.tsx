import { useForm } from 'react-hook-form'
import { BsCameraFill, BsFillPlusCircleFill } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

import Form from '@ui/form/form'
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger, InputText } from '@ui/index'

export function AddProductDrawer() {
	const form = useForm()
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

						<InputText placeholder="가격을 입력해주세요." className="mt-4" />
					</section>
				</Form>
			</DrawerContent>
		</Drawer>
	)
}
