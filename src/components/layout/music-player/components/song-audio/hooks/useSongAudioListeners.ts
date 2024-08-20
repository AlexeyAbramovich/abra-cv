import { useEffect } from 'react'
import { useMusicContext } from '../../../hooks/useMusicContext'
import { formatTime } from '../../../utils/format-time.util'

export const useSongAudioListeners = (
	launchNextSong: () => void,
	setCoverShake: (play: boolean) => void
) => {
	const {
		song,
		progress,
		songCurrentTime,
		songEndTime,
		songImg,
		ctrlIcon,
		setIsSongLoaded
	} = useMusicContext()

	useEffect(() => {
		if (
			song.current &&
			progress.current &&
			songCurrentTime.current &&
			songEndTime.current &&
			songImg.current
		) {
			song.current.addEventListener('loadedmetadata', function () {
				progress.current!.max = `${song.current!.duration}`
				progress.current!.value = `${song.current!.currentTime}`
				songEndTime.current!.textContent = formatTime(song.current!.duration)
				songCurrentTime.current!.textContent = formatTime(
					song.current!.currentTime
				)
				setIsSongLoaded(true)
			})

			song.current.onended = () => {
				launchNextSong()
			}

			song.current.onplay = () => {
				ctrlIcon.current!.src = '/src/assets/icons/pause.svg'
				setCoverShake(true)
			}

			song.current.onpause = () => {
				ctrlIcon.current!.src = '/src/assets/icons/play.svg'
				setCoverShake(false)
			}
		}
	}, [
		song.current,
		progress.current,
		ctrlIcon.current,
		songCurrentTime.current,
		songEndTime.current
	])
}
