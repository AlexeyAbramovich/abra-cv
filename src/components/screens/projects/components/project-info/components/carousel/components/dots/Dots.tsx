import cn from 'clsx'
import styles from './Dots.module.scss'

type Props = {
	curr: number
	projectName: string
	slides: string[]
}

const Dots = ({ curr, projectName, slides }: Props) => {
	return (
		<div className={styles.dotsWrapper}>
			<div className={styles.dots}>
				{slides.map((_, i) => (
					<div
						key={`${projectName}_dot_${i}`}
						className={cn(
							styles.dot,
							curr === i ? styles.current : styles.rest
						)}
					/>
				))}
			</div>
		</div>
	)
}

export default Dots
