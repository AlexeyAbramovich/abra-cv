import { useEffect } from 'react'

export const useCloseMusicPlayer = (
	setShowMusicPlayer: React.Dispatch<React.SetStateAction<boolean>>
) => {
	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (e.target instanceof Element) {
				if (!e.target.closest('[data-class]')) {
					setShowMusicPlayer(false)
				}
			} else {
				setShowMusicPlayer(false)
			}
		}

		document.body.addEventListener('click', handleClick)
		return () => {
			document.body.removeEventListener('click', handleClick)
		}
	}, [])
}
