import { useReadAuth } from '@pages/mypage'
import { useForm } from 'react-hook-form'

import Form from '@ui/form/form'
import { InputText } from '@ui/index'

export function AreaFilter() {
	const { data: auth } = useReadAuth()
	const form = useForm()
	return (
		<Form form={form} onSubmit={() => {}}>
			{auth?.area.map((area) => (
				<Form.Item key={area.id} name="area" label={area.name}>
					<InputText name="area" value={area.id} />
				</Form.Item>
			))}
		</Form>
	)
}
