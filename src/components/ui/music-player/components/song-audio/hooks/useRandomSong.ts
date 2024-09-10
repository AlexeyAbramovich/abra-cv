import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useMusicContext } from '../../../hooks/useMusicContext'
import { useMusicStore } from '../../../hooks/useMusicStore'

export function useRandomSong() {
	const { playlistQueue } = useMusicContext()

	const {
		currentPlaylist,
		currentSong,
		setCurrentSong,
		needNewRandomSong,
		setNeedNewRandomSong
	} = useMusicStore(
		useShallow((state) => ({
			currentPlaylist: state.currentPlaylist,
			currentSong: state.currentSong,
			setCurrentSong: state.setCurrentSong,
			needNewRandomSong: state.needNewRandomSong,
			setNeedNewRandomSong: state.setNeedNewRandomSong
		}))
	)

	useEffect(() => {
		if (currentPlaylist && needNewRandomSong) {
			let newSong =
				currentPlaylist[Math.floor(Math.random() * currentPlaylist.length)]
			if (currentSong) {
				// песня будет пересоздаваться если она уже была проиграна ранее
				while (
					playlistQueue.current.some((song) => song.name === newSong.name) ||
					currentSong === newSong
				) {
					newSong =
						currentPlaylist[Math.floor(Math.random() * currentPlaylist.length)]
				}
			}
			playlistQueue.current.push(newSong)
			/*
				при проигрывании всех песен из плейлиста очередь сбрасывается до первоначального состояния
				(когда ни одна песня ещё не была проиграна)
  		*/
			if (playlistQueue.current.length === currentPlaylist.length) {
				playlistQueue.current = []
			}

			setCurrentSong(newSong)

			setNeedNewRandomSong(false)
		}
	}, [currentPlaylist, needNewRandomSong])
}
