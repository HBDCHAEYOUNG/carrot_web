import { MouseEvent } from 'react'

interface OverlayProps {
	onClick: (e: MouseEvent<HTMLDivElement>) => void
}

export function Overlay({ onClick }: OverlayProps) {
	return <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClick} />
}
