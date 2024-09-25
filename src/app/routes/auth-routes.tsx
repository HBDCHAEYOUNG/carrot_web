import BackLayout from '@app/layouts/back-layout'
import { Auth, Login, SignUp, StepOne } from '@pages/auth'

import { ErrorLayout } from './error-routes'

export const AuthRoutes = {
	path: '/auth',
	element: <BackLayout />,
	children: [
		{ index: true, element: <Auth /> },
		{ path: 'login', element: <Login /> },
		{ path: 'signup', element: <SignUp /> },
		{ path: 'signup/step1', element: <StepOne /> },
	],
	errorElement: <ErrorLayout />,
}
