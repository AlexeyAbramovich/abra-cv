import { useEffect, useRef } from 'react'

export const useLoader = (
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const warning = useRef<HTMLDivElement | null>(null)
	const warningText = useRef<HTMLSpanElement | null>(null)
	const errorIcon = useRef<HTMLImageElement | null>(null)
	const loaderProgress = useRef<HTMLSpanElement | null>(null)

	useEffect(() => {
		if (warning.current && warningText.current && errorIcon.current) {
			setTimeout(() => {
				warning.current!.classList.remove('none')
			}, 3000)
			setTimeout(() => {
				warningText.current!.textContent = '😊 ШУЧУ 😊 '
				warningText.current!.style.letterSpacing = '1.2px'
				warningText.current!.style.width = '120px'
				warningText.current!.style.textAlign = 'center'
				errorIcon.current!.classList.add('none')
			}, 6000)
			setTimeout(() => {
				warning.current!.classList.add('none')
				loaderProgress.current!.classList.remove('none')
			}, 8000)
			setTimeout(() => {
				sessionStorage.setItem('loading', 'false')
				setIsLoading(false)
			}, 10000)
		}
	}, [warning, warningText, errorIcon, loaderProgress])

	return { warning, warningText, errorIcon, loaderProgress }
}
