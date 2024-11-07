import * as React from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger } from '@ui/_shardcn/select'

import { InputText } from './input-text'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	options: any[]
}

export const InputSelect = React.forwardRef<HTMLInputElement, InputProps>(({ options, value, onChange }, ref) => {
	return (
		<Select onValueChange={onChange as any}>
			<SelectTrigger className="h-12 w-full overflow-hidden rounded-sm border-gray-300 pl-3 text-left text-gray-400 outline-none focus:ring-0 focus:[--tw-ring-offset-width:0px]">
				<InputText value={value} onChange={onChange} ref={ref} placeholder="선택해주세요" className="text-md border-none px-0 text-black" />
			</SelectTrigger>
			<SelectContent className="w-full rounded-sm bg-gray-200 px-1 py-3" onChange={() => console.log(1)}>
				{options.map((item) => (
					<SelectItem
						key={item.value}
						className="flex-1 rounded-md px-6 py-1 hover:bg-brand-01 hover:text-white hover:outline-none"
						value={item.value}
						onClick={() => console.log('click')}
					>
						{item.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
})

InputText.displayName = 'InputText'
