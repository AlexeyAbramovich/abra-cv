import { useEffect } from 'react'
import { useMusicContext } from '../../hooks/useMusicContext'

export const useMusicProgressListeners = () => {
	const { song, progress, setStopUpdatingProgress } = useMusicContext()

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
