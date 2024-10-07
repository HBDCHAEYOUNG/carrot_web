import { useSearchStore } from '@pages/home'
import { useSearchHistoryStore } from '@pages/home/store/use-search-history'
import { useForm } from 'react-hook-form'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import Form from '@ui/form/form'
import { InputText } from '@ui/input/input-text'

export function SearchBox() {
	const { searchHistory, setSearchHistory } = useSearchHistoryStore()
	const { setSearchMode } = useSearchStore()

	const form = useForm()
	const router = useNavigate()

	const onSubmitSearch = () => {
		const value = form.watch('keyword')
		if (searchHistory.includes(value)) return

		setSearchHistory(value)
		router(`/search?keyword=${value}`)
		setSearchMode()
	}

	return (
		<Form form={form} onSubmit={onSubmitSearch} className="mt-2 flex items-center justify-between gap-3 common-padding">
			<MdOutlineArrowBackIos
				className="size-6 cursor-pointer"
				onClick={() => {
					setSearchMode()
					router('/')
				}}
			/>
			<Form.Item name="keyword" className="w-full">
				<InputText className="h-10 w-full rounded-lg border-none bg-gray-01" placeholder="검색어를 입력하세요" />
			</Form.Item>
		</Form>
	)
}
