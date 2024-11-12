import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import Form from '@ui/form/form'
import { Button, DrawerClose, DrawerFooter, InputText } from '@ui/index'

export function PriceFilter() {
	const form = useForm()

	const [searchParams, setSearchParams] = useSearchParams()

	const onSubmit = () => {
		const min = form.getValues('minPrice')
		const max = form.getValues('maxPrice')

		if (min) searchParams.set('minPrice', min)
		else if (min === '') searchParams.delete('minPrice')

		if (max) searchParams.set('maxPrice', max)
		else if (max === '') searchParams.delete('maxPrice')

		setSearchParams(searchParams)
	}

	const onClickInit = () => {
		form.reset({
			minPrice: '',
			maxPrice: '',
		})
	}

	useEffect(() => {
		const min = searchParams.get('minPrice')
		const max = searchParams.get('maxPrice')

		form.setValue('maxPrice', max)
		form.setValue('minPrice', min)
	}, [])

	return (
		<Form form={form} onSubmit={onSubmit}>
			<div className="flex gap-2 py-6 flex-center">
				<Form.Item name="minPrice" className="text-center" label="최소 가격">
					<InputText type="number" name="minPrice" />
				</Form.Item>
				<p className="mt-7">~</p>
				<Form.Item name="maxPrice" className="text-center" label="최대 가격">
					<InputText type="number" name="maxPrice" />
				</Form.Item>
			</div>

			<DrawerFooter className="w-full flex-row justify-center gap-2">
				<Button type="button" className="flex-grow bg-gray-01 text-black" onClick={onClickInit}>
					초기화
				</Button>
				<DrawerClose className="flex-grow-[3]">
					<Button className="w-full bg-brand-01">적용하기</Button>
				</DrawerClose>
			</DrawerFooter>
		</Form>
	)
}
