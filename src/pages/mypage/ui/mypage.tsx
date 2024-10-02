import { Footer } from '@app/layouts'
import { useHeaderStore } from '@store/headerStore'
import { useEffect } from 'react'
import { IoSettingsOutline } from 'react-icons/io5'

export function Mypage() {
	const { toggleHeader } = useHeaderStore()

	useEffect(() => {
		toggleHeader(false)
		return () => toggleHeader(true)
	}, [toggleHeader])

	return (
		<>
			<header className="flex w-full justify-end px-4 py-6">
				<IoSettingsOutline className="size-6" />
			</header>
			<section></section>
			<Footer />
		</>
	)
}
