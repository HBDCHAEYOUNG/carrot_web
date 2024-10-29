import { useReadAuth } from '@pages/mypage'
import { useForm } from 'react-hook-form'

import Form from '@ui/form/form'
import { InputText } from '@ui/index'

export function AreaFilter() {
	const { data: auth } = useReadAuth()
	const form = useForm()
	return (
		<Form form={form} className="py-6" onSubmit={() => {}}>
			{auth?.area.map((area) => (
				<div key={area.id} className="flex items-center gap-1">
					<InputText {...form.register('category')} type="checkbox" className="size-4" name="area" value={area.id} />
					<p>{area.name}</p>
				</div>
			))}
		</Form>
	)
}
