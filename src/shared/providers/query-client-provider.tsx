import { QueryClient, QueryClientProvider, isServer } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode } from 'react'

function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000,
				retry: false,
			},
		},
	})
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
	if (isServer) {
		return makeQueryClient()
	} else {
		if (!browserQueryClient) browserQueryClient = makeQueryClient()
		return browserQueryClient
	}
}

export default function QueryProvider({ children }: { children: ReactNode }) {
	const queryClient = getQueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}