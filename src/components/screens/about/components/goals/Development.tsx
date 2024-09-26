import styles from './Goals.module.scss'

const Development = ({ dev }: { dev: string }) => {
	return (
		<div className={styles.development}>
			<img
				src={`/icons/${dev.toLowerCase()}.svg`}
				alt={`${dev} Illustration`}
				loading='lazy'
			/>
			<span>{dev}</span>
		</div>
	)
}

export default Development
