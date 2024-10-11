import { MdClose } from 'react-icons/md'

import { ButtonBasic, Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger } from '@ui/index'

export function EditProfile() {
	return (
		<Drawer direction="right">
			<DrawerTrigger>
				<ButtonBasic className="cursor-pointer bg-gray-01 text-black">프로필 수정</ButtonBasic>
			</DrawerTrigger>
			<DrawerContent className="h-full">
				<DrawerHeader>
					<DrawerClose>
						<MdClose className="fixed left-4 top-11 size-6" />
					</DrawerClose>
					<h1>프로필 수정</h1>
				</DrawerHeader>
				<div></div>
			</DrawerContent>
		</Drawer>
	)
}
