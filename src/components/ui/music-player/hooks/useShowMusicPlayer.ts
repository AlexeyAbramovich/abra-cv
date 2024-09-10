import { useEffect } from 'react'
import { useMusicContext } from './useMusicContext'

export const useShowMusicPlayer = (showMusicPlayer: boolean) => {
	const { player } = useMusicContext()

	useEffect(() => {
		if (player.current) {
			if (showMusicPlayer) {
				player.current.style.opacity = '1'
				player.current.style.zIndex = '1'
			} else {
				player.current.style.opacity = '0'
				player.current.style.zIndex = '-1'
			}
		}
	}, [showMusicPlayer])
}
