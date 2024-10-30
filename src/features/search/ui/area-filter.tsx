import { useReadAuth } from '@pages/mypage'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import Form from '@ui/form/form'
import { Button, DrawerClose, DrawerFooter, InputText } from '@ui/index'

export function AreaFilter() {
	const form = useForm()

	const [searchParams, setSearchParams] = useSearchParams()

	const { data: auth } = useReadAuth()

	const onSubmit = () => {
		const area = form.getValues('area')
		searchParams.set('area', area)
		setSearchParams(searchParams)
	}

	useEffect(() => {
		const area = searchParams.get('area')
		form.setValue('area', area)
	}, [searchParams, form])

	return (
		<Form form={form} className="py-6" onSubmit={onSubmit}>
			{auth?.area.map((area) => (
				<div key={area.id} className="flex items-center gap-1">
					<InputText {...form.register('area')} type="checkbox" className="size-4" name="area" value={area.id} />
					<p>{area.name}</p>
				</div>
			))}

			<DrawerFooter className="w-full flex-row justify-center gap-2">
				<Button className="flex-grow bg-gray-01 text-black">초기화</Button>
				<DrawerClose className="flex-grow-[3]">
					<Button className="w-full bg-brand-01">적용하기</Button>
				</DrawerClose>
			</DrawerFooter>
		</Form>
	)
}
