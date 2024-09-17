import useSearchStore from '@store/searchStore'
import { CiBellOn, CiSearch } from 'react-icons/ci'

import { Menubar } from '@widgets/header'

import { InputText } from '@ui/index'

import { Logo } from '@icons/logo'

function Header() {
	const { searchMode, toggleSearchMode } = useSearchStore()

	const keyword = ['아이폰', '애플워치', '홍대 쇼파', '잠실 냉장고', '아이폰 케이스', '애플워치 케이스']

	return (
		<header className="flex w-full items-center justify-between">
			<Menubar />

			<Logo />

			<div className="flex items-center">
				<CiSearch className="h-6 w-6" onClick={toggleSearchMode} />
				{searchMode && (
					<>
						<div
							className="fixed inset-0 bg-black bg-opacity-50"
							onClick={(e) => {
								if (e.target === e.currentTarget) {
									toggleSearchMode()
								}
							}}
						/>
						<div className="fixed left-0 top-0 z-10 w-full bg-white p-4">
							<div className="flex items-center justify-between gap-3">
								<InputText className="w-full" placeholder="검색어를 입력하세요" />
								<p onClick={toggleSearchMode} className="whitespace-nowrap font-extrabold">
									취소
								</p>
							</div>
							<div>
								<p>추천</p>
								<ul className="grid grid-cols-2">
									{keyword.map((items, index) => (
										<ul key={index}>{items}</ul>
									))}
								</ul>
							</div>
						</div>
					</>
				)}
				<CiBellOn className="h-6 w-6" />
			</div>
		</header>
	)
}

export default Header
