import { useHeaderStore } from '@store/headerStore'
import { Outlet } from 'react-router-dom'

import { Header } from './index'

function CommonLayout() {
	const { isHeader } = useHeaderStore()
	return (
		<div>
			{isHeader && <Header />}
			<Outlet />
		</div>
	)
}

export default CommonLayout
