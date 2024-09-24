import { useEffect, useRef, useState } from 'react'

export const useWarning = () => {
	const [isJoke, setIsJoke] = useState(false)
	const [hideWarning, setHideWarning] = useState(false)

	const warningText = useRef<HTMLSpanElement | null>(null)

	useEffect(() => {
		setTimeout(() => {
			setIsJoke(true)
			warningText.current!.textContent = '😊 ШУЧУ 😊'
		}, 3000)
		setTimeout(() => {
			setHideWarning(true)
		}, 5000)
	}, [])

	return { isJoke, hideWarning, warningText }
}
