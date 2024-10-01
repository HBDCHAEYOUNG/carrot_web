import { Detail } from '@pages/detail'
import { Home, Search } from '@pages/home'
import { Notice } from '@pages/notice'

import CommonLayout from '../layouts/common-layout'
import { ErrorLayout } from './error-routes'

export const HomeRoutes = {
	path: '/',
	element: <CommonLayout />,
	children: [
		{ index: true, element: <Home /> },
		{ index: false, path: 'detail/:id', element: <Detail /> },
		{ path: 'search', element: <Search /> },
		{ path: 'notice', element: <Notice /> },
	],
	errorElement: <ErrorLayout />,
}
