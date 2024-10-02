import { useHeaderStore } from '@store/headerStore'
import { Outlet } from 'react-router-dom'

import { ButtonBack } from '@ui/index'

function BackLayout() {
	const { isHeader } = useHeaderStore()
	return (
		<div>
			{isHeader && <ButtonBack />}
			<Outlet />
		</div>
	)
}

export default BackLayout
