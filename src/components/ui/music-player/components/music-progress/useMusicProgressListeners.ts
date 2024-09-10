import { useEffect } from 'react'
import { useMusicContext } from '../../hooks/useMusicContext'
import { useMusicStore } from '../../hooks/useMusicStore'

export const useMusicProgressListeners = () => {
	const { song, progress } = useMusicContext()

	const setStopUpdatingProgress = useMusicStore(
		(state) => state.setStopUpdatingProgress
	)

	useEffect(() => {
		if (progress.current && song.current) {
			progress.current.onchange = () => {
				song.current!.currentTime = +progress.current!.value
			}

			progress.current.onmousedown = () => {
				setStopUpdatingProgress(true)
			}

			progress.current.onmouseup = () => {
				setStopUpdatingProgress(false)
			}
		}
	}, [])
}
