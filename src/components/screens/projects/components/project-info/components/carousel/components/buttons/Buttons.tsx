import styles from './Buttons.module.scss'
import NextSvg from './components/NextSvg'
import PrevSvg from './components/PrevSvg'

const Buttons = ({ prev, next }: { prev: () => void; next: () => void }) => {
	return (
		<div className={styles.buttons}>
			<button aria-label='Previous slide' onClick={prev}>
				<PrevSvg />
			</button>
			<button aria-label='Next slide' onClick={next}>
				<NextSvg />
			</button>
		</div>
	)
}

export default Buttons
