import { useEffect } from 'react'
import { useMusicContext } from '../../../hooks/useMusicContext'
import { formatTime } from '../../../utils/format-time.util'

export const useStopUpdatingProgressWhileOnChange = () => {
	const { song, progress, songCurrentTime, stopUpdatingProgress } =
		useMusicContext()

	useEffect(() => {
		if (song.current && progress.current && songCurrentTime.current) {
			song.current.ontimeupdate = () => {
				if (!stopUpdatingProgress) {
					progress.current!.value = `${song.current!.currentTime}`
				}
				songCurrentTime.current!.textContent = formatTime(
					song.current!.currentTime
				)
			}
		}
	}, [
		song.current,
		progress.current,
		songCurrentTime.current,
		stopUpdatingProgress
	])
}
