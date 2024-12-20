import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import Form from '@ui/form/form'
import { Button, DrawerClose, DrawerFooter, InputText } from '@ui/index'

import { useReadCategories } from '../model/use-category'

export function CategoryFilter() {
	const form = useForm()
	const { data: categories } = useReadCategories()

	const [searchParams, setSearchParams] = useSearchParams()

	const onSubmit = () => {
		const category = form.getValues('category')
		searchParams.set('category', category)
		setSearchParams(searchParams)
	}

	const onClickInit = () => {
		form.reset({
			category: '',
		})
	}

	useEffect(() => {
		const category = searchParams.get('category')
		form.setValue('category', category)
	}, [searchParams])

	return (
		<Form form={form} onSubmit={onSubmit} className="overflow-scroll py-6">
			{categories?.map((category) => (
				<div key={category.id} className="flex items-center gap-1">
					<InputText
						{...form.register('category')}
						id={category.name}
						className="mr-1 size-4 accent-brand-01"
						type="checkbox"
						name="category"
						value={category.id}
					/>
					<label htmlFor={category.name} className="w-full cursor-pointer">
						{category.name}
					</label>
				</div>
			))}

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
