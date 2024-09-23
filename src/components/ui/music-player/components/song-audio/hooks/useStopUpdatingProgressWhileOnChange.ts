import { useMusicContext } from '$hooks/useMusicContext'
import { useMusicStore } from '$hooks/useMusicStore'
import { useEffect } from 'react'
import { formatTime } from '../../../utils/format-time.util'

export const useStopUpdatingProgressWhileOnChange = () => {
	const { song, progress, songCurrentTime } = useMusicContext()

	const stopUpdatingProgress = useMusicStore(
		(state) => state.stopUpdatingProgress
	)

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
