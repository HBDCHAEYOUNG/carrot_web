import { Outlet } from 'react-router-dom'

import { Footer, Header } from './index'

interface CommonLayoutProps {
	isHeader?: boolean
	isFooter?: boolean
}

function CommonLayout({ isHeader = true, isFooter = true }: CommonLayoutProps) {
	return (
		<div>
			{isHeader && <Header />}
			<Outlet />
			{isFooter && <Footer />}
		</div>
	)
}

export default CommonLayout
