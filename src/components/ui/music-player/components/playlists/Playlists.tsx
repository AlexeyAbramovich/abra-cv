import { playlists } from '../../data/data'
import { useMusicStore } from '../../hooks/useMusicStore'
import Playlist from '../playlist/Playlist'
import styles from './Playlists.module.scss'

const Playlists = () => {
	const showPlaylists = useMusicStore((state) => state.showPlaylists)

	if (!showPlaylists) {
		return null
	}

	return (
		<div className={styles.playlists}>
			{playlists.map((playlist) => (
				<Playlist key={playlist.title} playlist={playlist} />
			))}
		</div>
	)
}

export default Playlists
