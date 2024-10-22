import { Footer } from '@app/layouts'
import { useReadAuth } from '@pages/mypage'

import { Products } from '@widgets/home'

export function Home() {
	const { data } = useReadAuth()
	console.log(111, data)
	return (
		<section className="py-12">
			<Products />
			<Footer />
		</section>
	)
}
