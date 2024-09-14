import { Detail, Home } from '@pages/index'

import CommonLayout from '../layouts/common-layout'
import { ErrorLayout } from './error-routes'

export const HomeRoutes = {
	path: '/',
	element: <CommonLayout />,
	children: [
		{ index: true, element: <Home /> },
		{ path: 'detail', element: <Detail title="detail" /> },
	],
	errorElement: <ErrorLayout />,
}
