import { z } from 'zod'

export const productSchema = z.object({
	title: z.string().min(1, { message: '제목을 입력해주세요!' }).max(20, { message: '최대 20자까지 입력할 수 있어요!' }),
	price: z.string().min(1, { message: '최소 1원 이상 입력해주세요!' }),
	isOffer: z.boolean(),
	areaIds: z.string(),
	categoryIds: z.string(),
	description: z.string().min(1, { message: '설명을 입력해주세요!' }),
})

export type ProductFormData = z.infer<typeof productSchema>
