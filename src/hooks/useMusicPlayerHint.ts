import { useEffect, useRef } from 'react'

export const useMusicPlayerHint = () => {
	const musicHintRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (musicHintRef.current) {
			setTimeout(() => {
				musicHintRef.current!.classList.remove('none')
				musicHintRef.current!.classList.add('show')
			}, 16000)

			setTimeout(() => {
				musicHintRef.current!.style.opacity = '1'
			}, 18000)

			setTimeout(() => {
				musicHintRef.current!.classList.add('hide')
				musicHintRef.current!.classList.remove('show')
			}, 26000)

			setTimeout(() => {
				musicHintRef.current!.classList.remove('hide')
				musicHintRef.current!.classList.add('none')
			}, 28000)
		}
	}, [])

	return { musicHintRef }
}
