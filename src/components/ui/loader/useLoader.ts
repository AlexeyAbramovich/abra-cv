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
				setTimeout(() => {
					warningText.current!.textContent = '😊 ШУТКА)'
					warningText.current!.style.width = 'fit-content'
					errorIcon.current!.classList.add('none')
					setTimeout(() => {
						warning.current!.classList.add('none')
						loaderProgress.current!.classList.remove('none')
						setTimeout(() => {
							setIsLoading(false)
						}, 2000)
					}, 2000)
				}, 3000)
			}, 3000)
		}
	}, [warning, warningText, errorIcon, loaderProgress])

	return { warning, warningText, errorIcon, loaderProgress }
}
