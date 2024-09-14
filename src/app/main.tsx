import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import '@styles/font.css'
import '@styles/global.css'

import routes from './routes/routes.ts'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={routes} />
	</StrictMode>,
)
