import cn from 'clsx'
import { music, playlists } from '../../data/data'
import { useMusicContext } from '../../hooks/useMusicContext'
import styles from './Playlists.module.scss'

const Playlists = () => {
	const {
		setCurrentPlaylist,
		setNeedNewRandomSong,
		activePlaylist,
		setActivePlaylist
	} = useMusicContext()

	return (
		<div className={styles.playlists}>
			{playlists.map((playlist) => (
				<div
					key={playlist.title}
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
					<img src={playlist.img} />
					<span>{playlist.title}</span>
				</div>
			))}
		</div>
	)
}

export default Playlists
