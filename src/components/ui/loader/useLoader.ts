import { useEffect, useState } from 'react'

export const useLoader = (
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const [error, setError] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setError(true)
		}, 3000)
		setTimeout(() => {
			sessionStorage.setItem('loading', 'false')
			setIsLoading(false)
		}, 10000)
	}, [])

	return error
}
