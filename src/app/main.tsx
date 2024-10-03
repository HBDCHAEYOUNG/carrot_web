import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import QueryProvider from '@providers/query-client-provider.tsx'

import '@styles/font.css'
import '@styles/global.css'

import routes from './routes/routes.ts'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryProvider>
			<RouterProvider router={routes} />
		</QueryProvider>
	</StrictMode>,
)
