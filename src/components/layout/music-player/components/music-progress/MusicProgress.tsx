import { useMusicContext } from '../../hooks/useMusicContext'
import styles from './MusicProgress.module.scss'
import { useMusicProgressListeners } from './useMusicProgressListeners'

const MusicProgress = () => {
	const { progress, songCurrentTime, songEndTime } = useMusicContext()

	useMusicProgressListeners()

	return (
		<div className={styles.progressWrapper} data-class='music'>
			<input
				ref={progress}
				className={styles.progress}
				type='range'
				data-class='music'
			/>
			<div className={styles.songTime} data-class='music'>
				<span ref={songCurrentTime} data-class='music'>
					00:00
				</span>
				<span ref={songEndTime} data-class='music'>
					00:00
				</span>
			</div>
		</div>
	)
}

export default MusicProgress
