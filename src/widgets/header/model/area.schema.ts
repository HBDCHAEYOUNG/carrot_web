import { z } from 'zod'

export const areaSchema = z.object({
	areaIds: z
		.array(
			z.object({
				id: z.number(),
				name: z.string(),
			}),
		)
		.min(1, { message: '최소 1개 이상 선택해주세요!' })
		.max(2, { message: '최대 2개까지 선택할 수 있어요!' }),
})

export type AreaFormData = z.infer<typeof areaSchema>
