import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useMusicContext } from '../../../hooks/useMusicContext'
import { useMusicStore } from '../../../hooks/useMusicStore'

export const usePreparePlayerSong = () => {
	const { song, songImg, songName, songArtist, ctrlIcon } = useMusicContext()

	const { currentSong, isFirstLaunch, isSongLoaded, setIsSongLoaded } =
		useMusicStore(
			useShallow((state) => ({
				currentSong: state.currentSong,
				isFirstLaunch: state.isFirstLaunch,
				isSongLoaded: state.isSongLoaded,
				setIsSongLoaded: state.setIsSongLoaded
			}))
		)

	useEffect(() => {
		if (
			song.current &&
			songImg.current &&
			songName.current &&
			songArtist.current &&
			currentSong
		) {
			song.current.src = currentSong.path
			songName.current.textContent = currentSong.name
			songArtist.current.textContent = currentSong.artist
			songImg.current.src = currentSong.cover
			songImg.current.alt = currentSong.name + ' by ' + currentSong.artist
			song.current.load()
		}
	}, [currentSong])

	useEffect(() => {
		if (!isFirstLaunch) {
			if (song.current && ctrlIcon.current && isSongLoaded) {
				ctrlIcon.current.src = '/icons/pause.svg'
				song.current.play()
				setIsSongLoaded(false)
			}
		}
	}, [isSongLoaded, isFirstLaunch])
}
