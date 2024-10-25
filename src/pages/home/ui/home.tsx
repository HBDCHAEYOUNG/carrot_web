import { Footer } from '@app/layouts'

import { Products } from '@widgets/home'

export function Home() {
	return (
		<section className="py-12">
			<Products />
			<Footer />
		</section>
	)
}
