import { useEffect } from 'react'

export const useErrorNotification = (
	isApiLimitReached: boolean,
	setIsApiLimitReached: React.Dispatch<React.SetStateAction<boolean>>
) => {
	useEffect(() => {
		if (isApiLimitReached) {
			setTimeout(() => {
				setIsApiLimitReached(false)
			}, 3000)
		}
	}, [isApiLimitReached])
}
