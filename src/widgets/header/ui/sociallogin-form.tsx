import { RiKakaoTalkFill } from 'react-icons/ri'
import { SiNaver } from 'react-icons/si'

import { ButtonCircle } from '@ui/index'

interface SocialloginFormProps {
	className?: string
}

export function SocialloginForm({ className }: SocialloginFormProps) {
	return (
		<div className={`flex flex-col items-center ${className}`}>
			<small className="pb-2 text-xs text-gray-500">SNS계정으로 간편 로그인</small>

			<div className="flex gap-2">
				<ButtonCircle className="bg-[#fcda00]" icon={<RiKakaoTalkFill className="size-7" />} />
				<ButtonCircle className="bg-[#10ad00]" icon={<SiNaver className="size-5" />} />
			</div>
		</div>
	)
}
