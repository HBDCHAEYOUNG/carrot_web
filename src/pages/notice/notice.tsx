import { useHeaderStore } from '@store/headerStore'
import { useEffect, useState } from 'react'
import { MdClose, MdOutlineArrowBackIos } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import { locale } from '@lib/locale'

import { Carrot } from '@icons/carrot'

const initValue = [
	{ id: 1, filter: '활동 알림', content: '1!', date: '2024. 9. 28. 오후 2:21:44' },
	{ id: 2, filter: '키워드 알림', content: '2!', date: '2024. 9. 27. 오후 6:21:44' },
	{ id: 3, filter: '키워드 알림', content: '아이폰 키워드의 상품이 등록되었습니다!', date: '2024. 9. 28. 오후 4:21:44' },
	{ id: 4, filter: '활동 알림', content: '우혁님이 올린 아이폰을 누군가 관심 목록에 추가하였습니다!', date: '2024. 9. 20. 오후 6:21:44' },
]

const filterList = ['활동 알림', '키워드 알림']

export function Notice() {
	const router = useNavigate()
	const { toggleHeader } = useHeaderStore()

	const [editMode, setEditMode] = useState(false)
	const [filter, setFilter] = useState('활동 알림')
	const [noticeList, setNoticeList] = useState(initValue)

	const filterNoticeList = noticeList.filter((item) => item.filter === filter)

	const onClickEditMode = () => {
		setEditMode((prev) => !prev)
	}

	const onClickRemove = (id: number) => () => {
		setNoticeList((prev) => prev.filter((notice) => notice.id !== id))
	}

	useEffect(() => {
		toggleHeader(false)
		return () => toggleHeader(true)
	}, [toggleHeader])

	return (
		<section className="pt-2 [&_*]:text-sm">
			<header className="flex items-center justify-center gap-3 px-4">
				<MdOutlineArrowBackIos onClick={() => router(-1)} className="mr-2 size-6" />
				<h2 className="size-10 w-full content-center text-center font-bold">알림</h2>
				<button className="whitespace-nowrap text-gray-02" onClick={onClickEditMode}>
					{editMode ? '완료' : '편집'}
				</button>
			</header>

			<nav className="mt-2 flex">
				{filterList.map((item) => (
					<p
						key={item}
						className={`w-full border-b pb-2 text-center ${item === filter ? 'border-black' : 'border-gray-01 text-gray-02'}`}
						onClick={() => setFilter(item)}
					>
						{item}
					</p>
				))}
			</nav>

			<ul className="flex flex-col gap-6 px-4 pt-4">
				{filterNoticeList.map((item) => (
					<li key={item.id} className="flex items-start gap-4">
						<Carrot className="block size-8 overflow-hidden rounded-full border border-gray-01 leading-tight" />
						<p className="flex w-full flex-col gap-1 break-words">
							{item.content}
							<small className="text-gray-02">{locale(item.date)}</small>
						</p>
						{editMode && <MdClose className="size-6 cursor-pointer text-gray-02" onClick={onClickRemove(item.id)} />}
					</li>
				))}
			</ul>
		</section>
	)
}
