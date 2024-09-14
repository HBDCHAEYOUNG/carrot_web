import { Outlet } from 'react-router-dom'

import Header from './header'

function CommonLayout() {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	)
}

export default CommonLayout
