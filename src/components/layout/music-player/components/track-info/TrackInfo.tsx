import { useMusicContext } from '../../hooks/useMusicContext'
import styles from './TrackInfo.module.scss'

const TrackInfo = () => {
	const { songName, songArtist } = useMusicContext()

	return (
		<div className={styles.trackInfo} data-class='music'>
			<span ref={songName} data-class='music'></span>
			<span ref={songArtist} data-class='music'></span>
		</div>
	)
}

export default TrackInfo
