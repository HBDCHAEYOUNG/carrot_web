import { useForm } from 'react-hook-form'

import Form from '@ui/form/form'
import { InputText } from '@ui/index'

export function PriceFilter() {
	const form = useForm()
	console.log(form.watch('minPrice', 'maxPrice'))
	return (
		<Form form={form} className="flex gap-2 py-6 flex-center" onSubmit={() => {}}>
			<Form.Item name="minPrice" className="text-center" label="최소 가격">
				<InputText name="minPrice" />
			</Form.Item>
			<p>~</p>
			<Form.Item name="maxPrice" className="text-center" label="최대 가격">
				<InputText name="maxPrice" />
			</Form.Item>
		</Form>
	)
}
