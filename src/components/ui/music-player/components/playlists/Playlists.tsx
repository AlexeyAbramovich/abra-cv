import { playlists } from '../../data/data'
import Playlist from '../playlist/Playlist'
import styles from './Playlists.module.scss'

const Playlists = () => {
	return (
		<div className={styles.playlists}>
			{playlists.map((playlist) => (
				<Playlist key={playlist.title} playlist={playlist} />
			))}
		</div>
	)
}

export default Playlists
