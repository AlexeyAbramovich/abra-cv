import { useMusicContext } from '$hooks/useMusicContext'
import { useMusicStore } from '$hooks/useMusicStore'
import { useEffect } from 'react'
import { formatTime } from '../../../utils/format-time.util'

export const useSongAudioListeners = (launchNextSong: () => void) => {
	const { song, progress, songCurrentTime, songEndTime, songImg, ctrlIcon } =
		useMusicContext()

	const setIsSongLoaded = useMusicStore((state) => state.setIsSongLoaded)

	useEffect(() => {
		if (
			![
				song.current,
				progress.current,
				songCurrentTime.current,
				songEndTime.current,
				songImg.current
			].every(Boolean)
		) {
			return
		}

		const handleLoadingMetadata = () => {
			progress.current!.max = `${song.current!.duration}`
			progress.current!.value = `${song.current!.currentTime}`
			songEndTime.current!.textContent = formatTime(song.current!.duration)
			songCurrentTime.current!.textContent = formatTime(
				song.current!.currentTime
			)
			setIsSongLoaded(true)
		}

		song!.current!.addEventListener('loadedmetadata', handleLoadingMetadata)

		song!.current!.onended = () => {
			launchNextSong()
		}

		song!.current!.onplay = () => {
			ctrlIcon.current!.src = '/abra-cv/icons/pause.svg'
		}

		song!.current!.onpause = () => {
			ctrlIcon.current!.src = '/abra-cv/icons/play.svg'
		}

		return () => {
			song.current?.removeEventListener('loadedmetadata', handleLoadingMetadata)
		}
	}, [])
}
