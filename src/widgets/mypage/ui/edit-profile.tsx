import { zodResolver } from '@hookform/resolvers/zod'
import { useCheckNickname } from '@pages/auth'
import { useReadAuth, useUpdateAuth } from '@pages/mypage'
import { MouseEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaUserLarge } from 'react-icons/fa6'
import { MdClose, MdPhotoCamera } from 'react-icons/md'
import { z } from 'zod'

import { Password } from '@features/mypage'

import Form from '@ui/form/form'
import { ButtonBasic, Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger, InputText } from '@ui/index'
import { Modal } from '@ui/modal/modal'

export function EditProfile() {
	const { data: auth } = useReadAuth()
	const { mutateAsync: updateAuth } = useUpdateAuth()
	const { mutateAsync: checkNickname, isError: checkNicknameError } = useCheckNickname()

	const [isOpen, setIsOpen] = useState(false)

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

	const onClickNickname = async () => {
		if (auth?.nickname === form.getValues('nickname')) return
		try {
			setIsOpen(!isOpen)
			await checkNickname({ nickname: form.getValues('nickname') })
		} catch (error) {
			console.log(error)
		}
	}

	const onClickPassword = () => {
		setIsOpen(!isOpen)
	}

	const onClickCancel = (e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		setIsOpen(false)
	}
	const onClickComplete = () => {
		const nickname = form.getValues('nickname')
		const password = form.watch('password')
		console.log(nickname, password)
		updateAuth(nickname, password)
		setIsOpen(false)
	}

	useEffect(() => {
		form.setValue('nickname', auth?.nickname ?? '')
	}, [form, auth])

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
				</DrawerHeader>

				{isOpen && (
					<Modal onClickCancel={onClickCancel} onClickComplete={onClickComplete}>
						{checkNicknameError ? (
							<p>중복된 닉네임입니다.</p>
						) : (
							<div>
								<h1 className="text-lg font-semibold">정말 변경할까요?</h1>
							</div>
						)}
					</Modal>
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

					<Form form={form} onSubmit={() => {}} className="flex w-full flex-col">
						<Form.Item name="nickname" label="닉네임">
							<InputText placeholder="닉네임을 입력해주세요" />
						</Form.Item>
						<ButtonBasic onClick={onClickNickname} type="button" className="mb-4">
							닉네임 수정하기
						</ButtonBasic>

						<Password label="비밀번호 수정" className="rounded-sm border-t" />
						<ButtonBasic type="button" onClick={onClickPassword} className="mb-4">
							비밀번호 수정하기
						</ButtonBasic>
					</Form>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
