import { Detail } from '@pages/detail'
import { Home } from '@pages/home'
import { Login } from '@pages/login'
import { SignUp } from '@pages/login/ui/sign-up'

import CommonLayout from '../layouts/common-layout'
import { ErrorLayout } from './error-routes'

export const HomeRoutes = {
	path: '/',
	element: <CommonLayout />,
	children: [
		{ index: true, element: <Home /> },
		{ path: 'detail/:id', element: <Detail /> },
		{ path: 'auth/login', element: <Login /> },
		{ path: 'auth/signup', element: <SignUp /> },
	],
	errorElement: <ErrorLayout />,
}
