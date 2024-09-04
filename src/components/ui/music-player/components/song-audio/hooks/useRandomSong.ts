import { useEffect } from 'react'
import { useMusicContext } from '../../../hooks/useMusicContext'

export function useRandomSong() {
	const {
		currentPlaylist,
		currentSong,
		setCurrentSong,
		needNewRandomSong,
		setNeedNewRandomSong,
		playlistQueue,
		setPlaylistQueue
	} = useMusicContext()

	useEffect(() => {
		if (currentPlaylist && needNewRandomSong) {
			let newSong =
				currentPlaylist[Math.floor(Math.random() * currentPlaylist.length)]
			if (currentSong) {
				// песня будет пересоздаваться если она уже была проиграна ранее
				while (
					playlistQueue.some((song) => song.name === newSong.name) ||
					currentSong === newSong
				) {
					newSong =
						currentPlaylist[Math.floor(Math.random() * currentPlaylist.length)]
				}
			}
			playlistQueue.push(newSong)
			/*
    при проигрывании всех песен из плейлиста очередь сбрасывается до первоначального состояния
    (когда ни одна песня ещё не была проиграна)
  */
			if (playlistQueue.length === currentPlaylist.length) {
				// код ниже исправляет баг, чтобы последня песня из очереди плейлиста не проигрывалась дважды при её очистке
				newSong = playlistQueue.slice(1, -1)[
					Math.floor(Math.random() * (currentPlaylist.length - 1))
				]
				setPlaylistQueue([newSong])
			}

			setCurrentSong(newSong)

			setNeedNewRandomSong(false)
		}
	}, [currentPlaylist, needNewRandomSong])
}
