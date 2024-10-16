import { MouseEvent } from 'react'

import { Overlay } from '@ui/overlay/overlay'

interface ModalProps {
	onClickContent: (e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>) => void
	onClickComplete: () => void
	children: React.ReactNode
}

export function Modal({ onClickContent, onClickComplete, children }: ModalProps) {
	return (
		<div className="fixed left-0 top-0 h-full w-full">
			<Overlay onClick={onClickContent} />
			<div className="fixed left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-3 rounded-lg bg-white p-6">
				{children}
				<div className="flex gap-2">
					<button className="w-full rounded-md bg-gray-01 px-4 py-2 text-black flex-center hover:brightness-90" onClick={onClickContent}>
						<p>취소</p>
					</button>
					<button className="w-full rounded-md bg-brand-01 px-4 py-2 text-white flex-center hover:brightness-125" onClick={onClickComplete}>
						<p>완료</p>
					</button>
				</div>
			</div>
		</div>
	)
}
