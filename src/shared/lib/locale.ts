import { format, register } from 'timeago.js'
import koLocale from 'timeago.js/lib/lang/ko'

register('ko', koLocale)

export const locale = (date: string) => format(date, 'ko')
