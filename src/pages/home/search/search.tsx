import { useSearchParams } from 'react-router-dom'

import { Products } from '@widgets/home'

export function Search() {
	const [searchParams] = useSearchParams()
	const query = searchParams.get('keyword') || ''

	return (
		<div className="pb-10 pt-10">
			<small className="block w-full text-center text-gray-02">{`"${query}" 검색결과 입니다.`}</small>
			<Products />
		</div>
	)
}
