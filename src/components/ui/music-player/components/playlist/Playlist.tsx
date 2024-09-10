import cn from 'clsx'
import { useShallow } from 'zustand/react/shallow'
import { music } from '../../data/data'
import { useMusicContext } from '../../hooks/useMusicContext'
import { useMusicStore } from '../../hooks/useMusicStore'
import styles from './Playlist.module.scss'

type Props = {
	playlist: { img: string; title: string }
}

const Playlist = ({ playlist }: Props) => {
	const { playlistQueue } = useMusicContext()

	const {
		setCurrentPlaylist,
		setNeedNewRandomSong,
		activePlaylist,
		setActivePlaylist
	} = useMusicStore(
		useShallow((state) => ({
			setCurrentPlaylist: state.setCurrentPlaylist,
			setNeedNewRandomSong: state.setNeedNewRandomSong,
			activePlaylist: state.activePlaylist,
			setActivePlaylist: state.setActivePlaylist
		}))
	)

	return (
		<div
			className={cn(
				styles.playlist,
				activePlaylist === playlist.title && styles.active
			)}
			onClick={() => {
				setActivePlaylist(playlist.title)
				setCurrentPlaylist(
					music.filter((song) => song.playlist === playlist.title)
				)
				playlistQueue.current = []
				setNeedNewRandomSong(true)
			}}
		>
			<img src={playlist.img} alt={playlist.title + 'playlist'} />
			<span>{playlist.title}</span>
		</div>
	)
}

export default Playlist
