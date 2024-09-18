import useSearchStore from '@store/searchStore'
import { CiBellOn, CiSearch } from 'react-icons/ci'

import { Menubar } from '@widgets/header'

import { InputText } from '@ui/index'

import { Logo } from '@icons/logo'

function Header() {
	const { searchMode, toggleSearchMode } = useSearchStore()

	const keyword = ['아이폰', '애플워치', '홍대 쇼파', '잠실 냉장고', '아이폰 케이스', '애플워치 케이스']

	return (
		<header className="mx-2 my-4 flex w-full items-center justify-between">
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
						<div className="fixed left-0 top-0 z-10 w-full bg-white px-4">
							<div className="mt-2 flex items-center justify-between gap-3">
								<InputText className="w-full rounded-lg border-none bg-gray-01" placeholder="검색어를 입력하세요" />
								<p onClick={toggleSearchMode} className="whitespace-nowrap font-extrabold">
									취소
								</p>
							</div>
							<div className="text-sm">
								<p className="mt-4 font-bold text-gray-02">추천</p>
								<ul className="grid-line grid grid-cols-2">
									{keyword.map((items, index) => (
										<li key={index} className="border-b border-gray-01 py-5">
											{items}
										</li>
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
