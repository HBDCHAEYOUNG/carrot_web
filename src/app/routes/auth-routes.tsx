import BackLayout from '@app/layouts/back-layout'
import { Auth, Join, Login } from '@pages/auth'

import { ErrorLayout } from './error-routes'

export const AuthRoutes = {
	path: '/auth',
	element: <BackLayout />,
	children: [
		{ index: true, element: <Auth /> },
		{ path: 'login', element: <Login /> },
		{ path: 'join', element: <Join /> },
	],
	errorElement: <ErrorLayout />,
}
