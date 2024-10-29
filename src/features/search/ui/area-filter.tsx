import { useFilterStore } from '@pages/home/store/use-filter'
import { useReadAuth } from '@pages/mypage'
import { useForm } from 'react-hook-form'

import Form from '@ui/form/form'
import { InputText } from '@ui/index'

export function AreaFilter() {
	const form = useForm()

	const { data: auth } = useReadAuth()
	const { setAreaFilter } = useFilterStore()

	const onclickArea = () => {
		setTimeout(() => {
			setAreaFilter(form.getValues('area'))
		}, 0)
	}
	return (
		<Form form={form} className="py-6" onSubmit={() => {}}>
			{auth?.area.map((area) => (
				<div key={area.id} className="flex items-center gap-1">
					<InputText {...form.register('area')} type="checkbox" className="size-4" name="area" value={area.id} onClick={onclickArea} />
					<p>{area.name}</p>
				</div>
			))}
		</Form>
	)
}
