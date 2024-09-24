import { TypeAnimation } from 'react-type-animation'
import { useMusicPlayerHint } from '../../../hooks/useMusicPlayerHint'
import styles from './MusicPlayerHint.module.scss'

const CURSOR_CLASS_NAME = 'index-module_type__E-SaG'

const MusicPlayerHint = () => {
	const musicHintRef = useMusicPlayerHint()

	return (
		<div ref={musicHintRef} className={styles.musicPlayerHint + ' none'}>
			<span />
			<TypeAnimation
				className={CURSOR_CLASS_NAME}
				sequence={[
					6000,
					'Дорогой Гость, для вашего комфорта, предлагаю включить музыку на фоне, надеюсь она придётся вам по вкусу🎶🎧',
					500,
					(el) => el?.classList.remove(CURSOR_CLASS_NAME) // remove cursor after 2s
				]}
				speed={30}
				wrapper='span'
				cursor={true}
			/>
			<img src='/icons/arrow-down-right.svg' />
		</div>
	)
}

export default MusicPlayerHint
