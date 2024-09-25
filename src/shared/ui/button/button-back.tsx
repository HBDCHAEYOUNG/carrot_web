import { MdOutlineArrowBackIos } from 'react-icons/md'

export function ButtonBack() {
	return (
		<button type="button" onClick={() => history.go(-1)} className="fixed left-0 top-0 cursor-pointer self-start px-2">
			<MdOutlineArrowBackIos className="mt-6 size-6" />
		</button>
	)
}
