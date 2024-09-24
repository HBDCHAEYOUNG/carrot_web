import { Auth, Login, SignUp, StepOne } from '@pages/auth'

import CommonLayout from '../layouts/common-layout'
import { ErrorLayout } from './error-routes'

export const AuthRoutes = {
	path: '/auth',
	element: <CommonLayout isHeader={false} isFooter={false} />,
	children: [
		{ index: true, element: <Auth /> },
		{ path: 'login', element: <Login /> },
		{ path: 'signup', element: <SignUp /> },
		{ path: 'signup/step1', element: <StepOne /> },
	],
	errorElement: <ErrorLayout />,
}
