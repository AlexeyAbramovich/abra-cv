import { useState } from 'react'

export type CopyText = {
	phone: boolean
	gmail: boolean
	skype: boolean
}

export const useCopyText = () => {
	const [copyText, setCopyText] = useState<CopyText>({
		phone: false,
		gmail: false,
		skype: false
	})
	return {
		...copyText,
		setCopyText
	}
}
