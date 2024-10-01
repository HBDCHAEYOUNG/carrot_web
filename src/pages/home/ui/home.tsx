import { Footer } from '@app/layouts'

import { Products } from '@widgets/home'

export function Home() {
	return (
		<section className="py-10">
			<Products />
			<Footer />
		</section>
	)
}
