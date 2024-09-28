interface CarrotProps extends React.SVGProps<SVGSVGElement> {
	className?: string
}

export function Carrot({ className }: CarrotProps) {
	return (
		<picture className={className}>
			<img
				className="size-full"
				src="https://about.daangn.com/static/63d3abb868d7a650b4c0383be7891252/e9ec68d0-e49d-4071-bf92-78ed3355003f_profile_daangn.png"
				alt="당근 로고"
			/>
		</picture>
	)
}
