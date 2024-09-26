import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Form from '@ui/form/form'
import { InputText, Overlay } from '@ui/index'

interface SearchFormProps {
	onClickSearch: () => void
}

export function SearchForm({ onClickSearch }: SearchFormProps) {
	const router = useNavigate()

	const form = useForm()

	const keyword = ['아이폰', '애플워치', '홍대 쇼파', '잠실 냉장고', '아이폰 케이스', '애플워치 케이스']

	const onSubmitSearch = () => {
		const value = form.watch('keyword')
		router(`/search?keyword=${value}`)
	}

	return (
		<>
			<div className="fixed left-0 top-0 z-10 w-full bg-white px-4">
				<Form form={form} onSubmit={onSubmitSearch} className="mt-2 flex items-center justify-between gap-3">
					<Form.Item name="keyword" className="w-full">
						<InputText className="w-full rounded-lg border-none bg-gray-01" placeholder="검색어를 입력하세요" />
					</Form.Item>

					<label onClick={onClickSearch} className="whitespace-nowrap font-extrabold">
						취소
					</label>
				</Form>
				<div className="text-sm">
					<h3 className="mt-4 font-bold text-gray-02">추천</h3>
					<ul className="grid-line grid grid-cols-2">
						{keyword.map((items, index) => (
							<li key={index} className="border-b border-gray-01 py-5">
								{items}
							</li>
						))}
					</ul>
				</div>
			</div>
			<Overlay onClick={onClickSearch} />
		</>
	)
}
