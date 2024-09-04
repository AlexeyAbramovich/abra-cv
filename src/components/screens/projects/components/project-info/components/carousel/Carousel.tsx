import { useState } from 'react'
import styles from './Carousel.module.scss'
import Buttons from './components/buttons/Buttons'
import Dots from './components/dots/Dots'
import Slides from './components/slides/Slides'

type Props = {
	projectName: string
	slides: string[]
}

export default function Carousel({ projectName, slides }: Props) {
	const [curr, setCurr] = useState(0)

	const prev = () =>
		setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
	const next = () =>
		setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

	return (
		<div className={styles.carousel}>
			<Slides curr={curr} projectName={projectName} slides={slides} />

			{slides.length > 1 && <Buttons prev={prev} next={next} />}

			{slides.length > 1 && (
				<Dots curr={curr} projectName={projectName} slides={slides} />
			)}
		</div>
	)
}
