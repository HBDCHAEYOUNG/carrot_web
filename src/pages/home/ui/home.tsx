import { Footer } from '@app/layouts'

import { AddProductDrawer } from '@entities/home/ui/add-product-drawer'

import { Products } from '@widgets/home'

export function Home() {
	return (
		<section className="py-12">
			<Products />
			<AddProductDrawer />
			<Footer />
		</section>
	)
}
