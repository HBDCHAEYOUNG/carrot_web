import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { Button } from '@ui/_shardcn/button'
import Form from '@ui/form/form'

import { InputText } from './input-text'

type InputTextType = typeof InputText

const meta: any = {
	title: 'Input/InputText',
	component: InputText,
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
	argTypes: {
		placeholder: {
			control: 'text',
			description: '입력 필드의 플레이스홀더',
			defaultValue: '입력해주세요',
		},
	},
} satisfies Meta<InputTextType>

export default meta

export const Default = (args: InputTextType) => {
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

	return (
		<Form form={form} onSubmit={onSubmit}>
			<Form.Item name="nickname">
				<InputText placeholder="닉네임을 입력해주세요." {...args} />
			</Form.Item>

			<Button type="submit">Submit</Button>
		</Form>
	)
}
