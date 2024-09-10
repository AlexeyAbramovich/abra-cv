import { useEffect } from 'react'

export const useSuccessNotification = (
	isDataSent: boolean,
	setIsDataSent: React.Dispatch<React.SetStateAction<boolean>>
) => {
	useEffect(() => {
		if (isDataSent) {
			setTimeout(() => {
				setIsDataSent(false)
			}, 3000)
		}
	}, [isDataSent])
}
