import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import Form from '@ui/form/form'
import { Button, DrawerClose, DrawerFooter, InputText } from '@ui/index'

export function PriceFilter() {
	const [searchParams, setSearchParams] = useSearchParams()

	const form = useForm()

	const onSubmit = () => {
		const min = form.getValues('minPrice')
		const max = form.getValues('maxPrice')
		searchParams.set('minPrice', min)
		searchParams.set('maxPrice', max)
		setSearchParams(searchParams)
	}

	useEffect(() => {
		const min = searchParams.get('minPrice')
		const max = searchParams.get('maxPrice')
		form.setValue('minPrice', min)
		form.setValue('maxPrice', max)
	}, [searchParams, form])

	return (
		<Form form={form} onSubmit={onSubmit}>
			<div className="flex gap-2 py-6 flex-center">
				<Form.Item name="minPrice" className="text-center" label="최소 가격">
					<InputText name="minPrice" />
				</Form.Item>
				<p>~</p>
				<Form.Item name="maxPrice" className="text-center" label="최대 가격">
					<InputText name="maxPrice" />
				</Form.Item>
			</div>

			<DrawerFooter className="w-full flex-row justify-center gap-2">
				<Button className="flex-grow bg-gray-01 text-black">초기화</Button>
				<DrawerClose className="flex-grow-[3]">
					<Button className="w-full bg-brand-01">적용하기</Button>
				</DrawerClose>
			</DrawerFooter>
		</Form>
	)
}
