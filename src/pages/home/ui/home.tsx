import { Link } from 'react-router-dom'

import '@styles/font.css'

import { InputText } from '@ui/input/input-text'

const items = [
	{ title: '부천', locate: '심곡본동', createAt: '2일전' },
	{ title: '부천', locate: '심곡본동', createAt: '2일전' },
	{ title: '부천', locate: '심곡본동', createAt: '2일전' },
]

export function Home() {
	return (
		<div id="1232" onClick={() => {}} className="h-screen w-screen">
			Home입니다
			<Link to="detail">detail로 이동</Link>
			<InputText />
			<ul className="flex flex-col items-center justify-center gap-5">
				{items.map(({ title, locate, createAt }) => (
					<li className="">
						<p>{title}</p>
						<p>{locate}</p>
						<p>{createAt}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
