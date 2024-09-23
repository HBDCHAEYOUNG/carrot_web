import { createBrowserRouter } from 'react-router-dom'

import { AuthRoutes } from './auth-routes'
import { HomeRoutes } from './home-routes'

export default createBrowserRouter([HomeRoutes, AuthRoutes])
