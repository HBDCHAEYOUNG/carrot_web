import { createBrowserRouter } from 'react-router-dom'

import { AuthRoutes } from './auth-routes'
import { HomeRoutes } from './home-routes'
import { MypageRoutes } from './mypage-routes'

export default createBrowserRouter([HomeRoutes, AuthRoutes, MypageRoutes])
