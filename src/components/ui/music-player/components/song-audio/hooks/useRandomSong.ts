import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useMusicStore } from '../../../hooks/useMusicStore'

export function useRandomSong() {
	const {
		currentPlaylist,
		currentSong,
		setCurrentSong,
		needNewRandomSong,
		setNeedNewRandomSong,
		playlistQueue,
		setPlaylistQueue
	} = useMusicStore(
		useShallow((state) => ({
			currentPlaylist: state.currentPlaylist,
			currentSong: state.currentSong,
			setCurrentSong: state.setCurrentSong,
			needNewRandomSong: state.needNewRandomSong,
			setNeedNewRandomSong: state.setNeedNewRandomSong,
			playlistQueue: state.playlistQueue,
			setPlaylistQueue: state.setPlaylistQueue
		}))
	)

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
				newSong = playlistQueue.slice(0, -1)[
					Math.floor(Math.random() * (currentPlaylist.length - 1))
				]
				setPlaylistQueue([newSong])
			}

			setCurrentSong(newSong)

			setNeedNewRandomSong(false)
		}
	}, [currentPlaylist, needNewRandomSong])
}
