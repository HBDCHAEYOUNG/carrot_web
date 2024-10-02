import BackLayout from '@app/layouts/back-layout'
import { Mypage } from '@pages/mypage'

import { ErrorLayout } from './error-routes'

export const MypageRoutes = {
	path: '/mypage',
	element: <BackLayout />,
	children: [{ index: true, element: <Mypage /> }],
	errorElement: <ErrorLayout />,
}
