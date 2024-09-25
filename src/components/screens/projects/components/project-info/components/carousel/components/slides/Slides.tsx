import styles from './Slides.module.scss'

type Props = {
	curr: number
	projectName: string
	slides: string[]
}

const Slides = ({ curr, projectName, slides }: Props) => {
	return (
		<div
			className={styles.slides}
			style={{ transform: `translateX(-${curr * 100}%)` }}
		>
			{slides.map((img, i) => (
				<img
					key={`${projectName}_slide_${i}`}
					src={img}
					alt=''
					loading='lazy'
				/>
			))}
		</div>
	)
}

export default Slides
