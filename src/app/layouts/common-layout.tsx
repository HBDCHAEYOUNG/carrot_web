import { useHeaderStore } from '@store/headerStore'
import { Outlet } from 'react-router-dom'

import { Footer, Header } from './index'

function CommonLayout() {
	const { isHeader } = useHeaderStore()
	return (
		<div>
			{isHeader && <Header />}
			<Outlet />
			<Footer />
		</div>
	)
}

export default CommonLayout
