import { MdOutlineArrowBackIos } from 'react-icons/md'

export function PrevpageBtn() {
	return (
		<button type="button" onClick={() => history.go(-1)} className="cursor-pointer self-start">
			<MdOutlineArrowBackIos className="mt-6 size-6" />
		</button>
	)
}
