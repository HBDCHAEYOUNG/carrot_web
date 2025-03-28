import { useSearchHistoryStore } from '@pages/home/store/use-search-history'
import { GoClock } from 'react-icons/go'
import { MdClose } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

interface HistoryCardProps {
	item: string
}

export function HistoryCard({ item }: HistoryCardProps) {
	const { setSearchRemove } = useSearchHistoryStore()

	const router = useNavigate()

	const onClickRemove = () => {
		setSearchRemove(item)
	}

	return (
		<li className="flex items-center">
			<GoClock className="size-6 rounded-full border border-gray-01 p-1" />
			<p className="ml-4 flex-1 cursor-pointer" onClick={() => router(`/search?keyword=${item}`)}>
				{item}
			</p>
			<MdClose className="size-4 cursor-pointer fill-gray-02" onClick={onClickRemove} />
		</li>
	)
}
