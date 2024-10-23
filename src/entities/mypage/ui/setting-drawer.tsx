import { useLogout } from '@pages/auth'
import { useAuthStore } from '@store/authStore'
import { MouseEvent, useState } from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdClose } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger } from '@ui/index'
import { Modal } from '@ui/modal/modal'

export function SettingDrawer() {
	const router = useNavigate()

	const { setLogout } = useAuthStore()
	const { mutateAsync: logout } = useLogout()

	const [isOpen, setIsOpen] = useState(false)

	const onClickCancel = (e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		setIsOpen(false)
	}

	const onClickComplete = () => {
		setIsOpen(false)
		setLogout()
		router('/')
		logout()
	}
	return (
		<Drawer direction="right">
			<DrawerTrigger>
				<IoSettingsOutline className="size-6 cursor-pointer" />
			</DrawerTrigger>
			<DrawerContent className="h-full common-padding">
				<DrawerHeader className="flex-center">
					<DrawerClose>
						<MdClose className="fixed left-6 top-11 size-6 cursor-pointer" />
					</DrawerClose>
					<h1 className="text-lg font-semibold">설정</h1>
				</DrawerHeader>
				<p className="cursor-pointer text-gray-02" onClick={() => setIsOpen(!isOpen)}>
					로그아웃
				</p>
				{isOpen && (
					<Modal onClickCancel={onClickCancel} onClickComplete={onClickComplete}>
						<h1 className="text-lg font-semibold">로그아웃</h1>
						<p className="cursor-pointer text-gray-02">로그아웃 하시겠습니까?</p>
					</Modal>
				)}
			</DrawerContent>
		</Drawer>
	)
}
