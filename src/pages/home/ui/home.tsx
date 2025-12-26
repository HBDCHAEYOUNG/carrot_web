import { Footer } from '@app/layouts'
import { useAuthStore } from '@store/authStore'

import { AddProductDrawer } from '@entities/home/ui/add-product-drawer'

import { Products } from '@widgets/home'

export function Home() {
	const { isLogin } = useAuthStore()
	return (
		<section className="py-12">
			<Products />
			{isLogin && <AddProductDrawer />}
			<Footer />
		</section>
	)
}
