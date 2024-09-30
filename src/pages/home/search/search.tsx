import { MdClose } from 'react-icons/md'
import { useSearchParams } from 'react-router-dom'

import { Products } from '@widgets/home'

import { Button, Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@ui/index'

export function Search() {
	const [searchParams] = useSearchParams()
	const query = searchParams.get('keyword') || ''

	return (
		<div className="pb-10 pt-10">
			<Drawer>
				<DrawerTrigger className="cursor-pointer py-2 pl-3 pr-20 text-sm outline-none">내 동네 설정</DrawerTrigger>
				<DrawerContent className="">
					<DrawerHeader className="flex items-center justify-center">
						<DrawerClose>
							<MdClose className="fixed left-4 top-10 size-6" />
						</DrawerClose>
						<DrawerTitle>내 동네 설정</DrawerTitle>
					</DrawerHeader>
					<div className="h-full bg-gray-400"></div>
					<DrawerFooter className="flex-row justify-center gap-2">
						<Button>초기화</Button>
						<DrawerClose>
							<Button>적용하기</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
			<small className="block w-full text-center text-gray-02">{`"${query}" 검색결과 입니다.`}</small>
			<Products />
		</div>
	)
}
