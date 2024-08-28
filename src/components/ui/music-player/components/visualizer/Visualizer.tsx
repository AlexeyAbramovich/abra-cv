import { useMusicContext } from '../../hooks/useMusicContext'
import { useCheckVisualizer } from './hooks/useCheckVisualizer'
import { useVisualizer } from './hooks/useVisualizer'
import styles from './Visualizer.module.scss'

const Visualizer = () => {
	const { songImg, visualizer } = useMusicContext()

	useCheckVisualizer()

	useVisualizer()

	return (
		<div className={styles.coverWrapper} data-class='music'>
			<img
				ref={songImg}
				className={styles.songImg}
				alt='Music Cover'
				data-class='music'
			/>
			<div className={styles.box} data-class='music'>
				<div
					ref={visualizer}
					className={styles.visualizer}
					data-class='music'
				></div>
			</div>
		</div>
	)
}

export default Visualizer
