import { Outlet } from 'react-router-dom'

import { Footer, Header } from './index'

function CommonLayout() {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default CommonLayout
