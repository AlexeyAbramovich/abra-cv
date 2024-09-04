import { useEffect } from 'react'
import { useMusicContext } from '../../hooks/useMusicContext'
import styles from './Volume.module.scss'

const Volume = () => {
	const { volume, song } = useMusicContext()

	useEffect(() => {
		if (volume.current && song.current) {
			volume.current.onchange = () => {
				song.current!.volume = +volume.current!.value / 100
			}
			song.current.volume = 0.5
		}
	}, [])

	return (
		<div className={styles.volumeWrapper} data-class='music'>
			<img src='/icons/volume.svg' data-class='music' alt='' />
			<input
				ref={volume}
				className={styles.volume}
				type='range'
				min={0}
				max={100}
				data-class='music'
				aria-label='Volume progress slider'
			/>
		</div>
	)
}

export default Volume
