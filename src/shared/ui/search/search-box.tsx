import { useForm } from 'react-hook-form'
import { MdOutlineArrowBackIos } from 'react-icons/md'

import Form from '@ui/form/form'
import { InputText } from '@ui/input/input-text'

interface SearchBoxProps {
	onSubmitSearch: () => void
}

export function SearchBox({ onSubmitSearch }: SearchBoxProps) {
	const form = useForm()

	return (
		<Form form={form} onSubmit={onSubmitSearch} className="mt-2 flex items-center justify-between gap-3">
			<MdOutlineArrowBackIos className="size-6" />
			<Form.Item name="keyword" className="w-full">
				<InputText className="h-10 w-full rounded-lg border-none bg-gray-01" placeholder="검색어를 입력하세요" />
			</Form.Item>
		</Form>
	)
}
