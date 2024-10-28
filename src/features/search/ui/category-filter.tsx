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
	return (
		<Form form={form} onSubmit={() => {}} className="overflow-scroll">
			{categories?.map((category) => (
				<Form.Item key={category.id} name="category" label={category.name}>
					<InputText type="checkbox" name="category" value={category.id} />
				</Form.Item>
				// <div key={category.id} className="flex items-center gap-1">
				// 	<input type="checkbox" value={category.id} onChange={() => onClickCategory(category.id)} />
				// 	<p>{category.name}</p>
				// </div>
			))}
			‹
		</Form>
	)
}
