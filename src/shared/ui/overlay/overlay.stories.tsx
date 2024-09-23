import type { Meta } from '@storybook/react'

import { Overlay } from './overlay'

type OverlayType = typeof Overlay

const meta: any = {
	title: 'Overlay',
	component: Overlay,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ textAlign: 'center', width: '360px' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<OverlayType>

export default meta

export const Default = () => {
	return <Overlay onClick={() => {}} />
}
