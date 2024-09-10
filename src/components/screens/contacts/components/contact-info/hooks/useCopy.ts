import { useEffect } from 'react'
import { CopyText } from './useCopyText'

export const useCopy = (
	copy: boolean,
	copyType: 'phone' | 'gmail' | 'skype',
	setCopyText: React.Dispatch<React.SetStateAction<CopyText>>
) => {
	useEffect(() => {
		if (copy) {
			setTimeout(
				() => setCopyText((prev) => ({ ...prev, [copyType]: false })),
				1000
			)
		}
	}, [copy])
}
