import { MdOutlineArrowBackIos } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export function ButtonBack() {
	const router = useNavigate()

	return (
		<button type="button" onClick={() => router(-1)} className="fixed left-0 top-0 w-full cursor-pointer self-start bg-white px-4">
			<MdOutlineArrowBackIos className="my-4 size-6" />
		</button>
	)
}
