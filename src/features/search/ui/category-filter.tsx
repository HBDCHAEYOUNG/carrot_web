import { useForm } from 'react-hook-form'

import Form from '@ui/form/form'
import { InputText } from '@ui/index'

import { useReadCategories } from '../model/use-category'

export function CategoryFilter() {
	const form = useForm()
	const { data: categories } = useReadCategories()
	// const onClickCategory = (id: number) => {
	// 	form.setValue('category', id)
	// }

	console.log(form.watch('category'))

	return (
		<Form form={form} onSubmit={() => {}} className="overflow-scroll py-6">
			{categories?.map((category) => (
				<div key={category.id} className="flex items-center gap-1">
					<InputText {...form.register('category')} className="size-4" type="checkbox" name="category" value={category.id} />
					<p>{category.name}</p>
				</div>
			))}
		</Form>
	)
}
