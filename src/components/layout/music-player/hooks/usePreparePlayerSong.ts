import { useEffect } from 'react'
import { useMusicContext } from './useMusicContext'

export const usePreparePlayerSong = () => {
	const {
		song,
		songImg,
		songName,
		songArtist,
		ctrlIcon,
		currentSong,
		isFirstLaunch,
		isSongLoaded,
		setIsSongLoaded
	} = useMusicContext()

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
				ctrlIcon.current.src = '/src/assets/icons/pause.svg'
				song.current.play()
				setIsSongLoaded(false)
			}
		}
	}, [isSongLoaded, isFirstLaunch])
}
