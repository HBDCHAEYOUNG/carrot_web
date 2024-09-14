import type { Meta } from '@storybook/react'

import { Input } from './input'

const meta = {
	title: 'Inputs/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: '360px' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Input>

export default meta

export const Default = (args: any) => {
	return <Input {...args} />
}
