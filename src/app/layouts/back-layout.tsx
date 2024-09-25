import { Outlet } from 'react-router-dom'

import { ButtonBack } from '@ui/index'

function BackLayout() {
	return (
		<div>
			<ButtonBack />
			<Outlet />
		</div>
	)
}

export default BackLayout
