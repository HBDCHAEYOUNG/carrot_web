import { zodResolver } from '@hookform/resolvers/zod'
import { useReadAuth, useUpdateAuth } from '@pages/mypage'
import { useAuthStore } from '@store/authStore'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaUserLarge } from 'react-icons/fa6'
import { MdClose, MdPhotoCamera } from 'react-icons/md'
import { z } from 'zod'

import Form from '@ui/form/form'
import { ButtonBasic, Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger, InputText, Overlay } from '@ui/index'

export function EditProfile() {
	const { token } = useAuthStore()
	const { data: auth } = useReadAuth(token)
	const { mutate: updateNickname } = useUpdateAuth(token)

	const [isOpen, setIsOpen] = useState(false)

	const onClickContent = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation()
		setIsOpen(false)
	}

	const formSchema = z.object({
		nickname: z.string().min(2, {
			message: 'nickname must be at least 2 characters.',
		}),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		mode: 'all',
		resolver: zodResolver(formSchema),
		defaultValues: {
			nickname: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
	}

	console.log(form.getValues())

	useEffect(() => {
		form.setValue('nickname', auth?.nickname ?? '')
	}, [form, auth])

	const onClickComplete = () => {
		const { nickname } = form.getValues()
		updateNickname(nickname)
		setIsOpen(false)
	}

	return (
		<Drawer direction="right">
			<DrawerTrigger>
				<ButtonBasic className="cursor-pointer bg-gray-01 text-black">프로필 수정</ButtonBasic>
			</DrawerTrigger>
			<DrawerContent className="h-full">
				<DrawerHeader className="flex flex-center">
					<DrawerClose>
						<MdClose className="fixed left-6 top-11 size-6" />
					</DrawerClose>
					<h1 className="text-lg font-semibold">프로필 수정</h1>
					<p className="fixed right-6 top-11 cursor-pointer text-gray-02" onClick={() => setIsOpen(!isOpen)}>
						완료
					</p>
				</DrawerHeader>

				{isOpen && (
					<div className="fixed left-0 top-0 h-full w-full">
						<Overlay onClick={onClickContent} />
						<div className="fixed left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-3 rounded-lg bg-white p-6">
							<h1 className="text-lg font-semibold">정말 닉네임을 변경할까요?</h1>
							<p className="text-gray-02">닉네임은 30일마다 1번 수정할 수 있어요</p>
							<div className="flex gap-2">
								<button
									className="w-full rounded-md bg-gray-01 px-4 py-2 text-black flex-center hover:brightness-90"
									onClick={onClickContent}
								>
									<p>취소</p>
								</button>
								<button
									className="w-full rounded-md bg-brand-01 px-4 py-2 text-white flex-center hover:brightness-125"
									onClick={onClickComplete}
								>
									<p>완료</p>
								</button>
							</div>
						</div>
					</div>
				)}

				<div className="flex-col gap-4 common-padding flex-center">
					<picture className="relative size-24 rounded-full bg-gray-01 flex-center">
						{auth?.profile ? (
							<img src={auth.profile} alt={auth.nickname} className="aspect-square rounded-full" />
						) : (
							<FaUserLarge className="founded-full size-6 fill-white" />
						)}
						<div className="absolute bottom-0 right-0 size-10 translate-x-1/4 translate-y-1/4 rounded-full border border-gray-01 bg-white flex-center">
							<MdPhotoCamera className="size-6" />
						</div>
					</picture>

					<h2 className="self-start font-semibold">닉네임</h2>
					<Form form={form} onSubmit={onSubmit} className="w-full">
						<Form.Item name="nickname">
							<InputText placeholder={auth?.nickname} />
						</Form.Item>
					</Form>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
