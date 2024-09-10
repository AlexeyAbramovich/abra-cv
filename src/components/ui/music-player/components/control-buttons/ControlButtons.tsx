import { memo } from 'react'
import { useMusicContext } from '../../hooks/useMusicContext'
import ControlButton from './components/ControlButton'
import styles from './ControlButtons.module.scss'

type Props = {
	toggleLaunch: () => void
	launchNextSong: () => void
}

const ControlButtons = memo(function ControlButtons({
	toggleLaunch,
	launchNextSong
}: Props) {
	const { prev, ctrlBtn, ctrlIcon, next } = useMusicContext()

	return (
		<div className={styles.controls} data-class='music'>
			<ControlButton
				reference={prev}
				songLauncher={launchNextSong}
				imgName={'next-prev'}
				alt='Previous song'
			/>
			<ControlButton
				reference={ctrlBtn}
				ctrlIcon={ctrlIcon}
				songLauncher={toggleLaunch}
				imgName={'play'}
				alt='Play/pause song'
			/>
			<ControlButton
				reference={next}
				songLauncher={launchNextSong}
				imgName={'next-prev'}
				alt='Next song'
			/>
		</div>
	)
})

export default ControlButtons
