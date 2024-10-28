import { useForm } from 'react-hook-form'

import Form from '@ui/form/form'
import { InputText } from '@ui/index'

export function PriceFilter() {
	const form = useForm()
	return (
		<Form form={form} onSubmit={() => {}}>
			<Form.Item name="minPrice" label="최소 가격">
				<InputText name="minPrice" />
			</Form.Item>
			<Form.Item name="maxPrice" label="최대 가격">
				<InputText name="maxPrice" />
			</Form.Item>
		</Form>
	)
}
