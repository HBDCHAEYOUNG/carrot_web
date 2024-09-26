import { Detail } from '@pages/detail'
import { Home } from '@pages/home'

import CommonLayout from '../layouts/common-layout'
import { ErrorLayout } from './error-routes'

export const HomeRoutes = {
	path: '/',
	element: <CommonLayout />,
	children: [
		{ index: true, element: <Home /> },
		{ path: 'detail/:id', element: <Detail /> },
		{ path: '/search?keyword=:keyword', element: <Home /> },
	],
	errorElement: <ErrorLayout />,
}
