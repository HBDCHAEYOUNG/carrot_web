import { Link } from 'react-router-dom'

interface DetailProps {
	title: string
}

export function Detail({ title }: DetailProps) {
	return (
		<div>
			{title}입니다
			<Link to="/">main으로 이동</Link>
		</div>
	)
}
