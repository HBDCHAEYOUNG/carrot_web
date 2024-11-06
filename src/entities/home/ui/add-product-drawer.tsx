import { useReadAuth } from '@pages/mypage'
import { FieldValues, useForm } from 'react-hook-form'
import { BsCameraFill, BsFillPlusCircleFill } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

import { useReadCategories } from '@features/search'

import Form from '@ui/form/form'
import { Button, Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerPortal, DrawerTrigger, InputText } from '@ui/index'

export function AddProductDrawer() {
	const form = useForm({
		mode: 'all',
	})

	const { data: auth } = useReadAuth()
	const { data: categories } = useReadCategories()
	// const { mutate: createProduct } = useCreateProduct()

	const onSubmit = (formValues: FieldValues) => {
		console.log(formValues)
	}
	console.log(111, form.watch())
	return (
		<Drawer direction="right">
			<DrawerTrigger>
				<BsFillPlusCircleFill className="fixed bottom-20 right-6 size-10 cursor-pointer text-brand-01" />
			</DrawerTrigger>
			<DrawerPortal>
				<DrawerContent className="h-screen common-padding">
					<DrawerHeader className="px-0 pb-4">
						<DrawerClose className="fixed top-11">
							<MdClose />
						</DrawerClose>
						상품 등록하기
					</DrawerHeader>

					<Form form={form} onSubmit={() => {}} className="flex max-h-[calc(100vh-5rem)] flex-col gap-8 overflow-y-auto">
						<ul className="flex">
							<li className="flex w-fit border p-4">
								<BsCameraFill className="size-6" />
							</li>
						</ul>

						<Form.Item name="title" label="제목">
							<InputText name="title" placeholder="제목" className="mt-4" />
						</Form.Item>

						<Form.Item name="price" label="가격">
							<InputText name="price" type="number" placeholder="가격을 입력해주세요." className="mt-4" />
						</Form.Item>

						<div className="flex items-center gap-2">
							<InputText {...form.register('isOffer')} name="isOffer" type="checkbox" className="size-4" />
							<p className="text-nowrap text-sm">가격제안받기</p>
						</div>

						<div>
							<p className="mb-2 text-sm">지역</p>
							<Form.Item name="areaIds">
								<select name="areaIds" className="w-full rounded-md border border-gray-300 p-2">
									{auth?.area?.map((area) => <option value={area.id}>{area.name}</option>)}
								</select>
							</Form.Item>
						</div>

						<Form.Item name="description" label="자세한 설명">
							<textarea
								name="description"
								id="description"
								className="mt-4 min-h-60 w-full rounded-md border border-gray-300 p-4"
								placeholder={`게시글 내용을 작성해 주세요. (판매금지 물품은 게시가 제한될 수 있어요.) 신뢰할 수 있는`}
							></textarea>
						</Form.Item>

						<Form.Item name="categoryId">
							<select name="categoryId" className="w-full rounded-md border border-gray-300 p-2">
								{categories?.map((category) => <option value={category.id}>{category.name}</option>)}
							</select>
						</Form.Item>

						<DrawerFooter className="mb-10 w-full flex-row justify-center gap-2 p-0">
							<Button className="flex-grow bg-gray-01 text-black" onClick={() => form.reset()}>
								초기화
							</Button>
							<DrawerClose className="flex-grow-[3]">
								<Button className="w-full bg-brand-01" onClick={onSubmit}>
									적용하기
								</Button>
							</DrawerClose>
						</DrawerFooter>
					</Form>
				</DrawerContent>
			</DrawerPortal>
		</Drawer>
	)
}
