import cn from 'clsx'
import { music } from '../../data/data'
import { useMusicContext } from '../../hooks/useMusicContext'
import styles from './Playlist.module.scss'

type Props = {
	playlist: { img: string; title: string }
}

const Playlist = ({ playlist }: Props) => {
	const {
		setCurrentPlaylist,
		setNeedNewRandomSong,
		activePlaylist,
		setActivePlaylist
	} = useMusicContext()

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
				setNeedNewRandomSong(true)
			}}
		>
			<img src={playlist.img} alt={playlist.title + 'playlist'} />
			<span>{playlist.title}</span>
		</div>
	)
}

export default Playlist
