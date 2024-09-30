import Tilt from 'react-parallax-tilt'
import styles from './Avatar.module.scss'

const Avatar = () => {
	return (
		<Tilt
			className={styles.avatarWrapper}
			transitionSpeed={500}
			transitionEasing='cubic-bezier(0,0,1,1)'
		>
			<article className={styles.avatar}>
				<img
					src='/abra-cv/images/photo.jpg'
					className={styles.photo}
					alt='Photo of Alexey Abramovich, the author of this cv-site'
				/>
				<img
					className={styles.js}
					src='/abra-cv/icons/technologies/javascript.svg'
					alt='JavaScript icon'
				/>
				<img
					className={styles.ts}
					src='/abra-cv/icons/technologies/typescript.svg'
					alt='TypeScript icon'
				/>
				<img
					className={styles.react}
					src='/abra-cv/icons/technologies/react.svg'
					alt='React Icon'
				/>
				<img
					className={styles.vite}
					src='/abra-cv/icons/technologies/vite.svg'
					alt='Vite icon'
				/>
				<img
					className={styles.html}
					src='/abra-cv/icons/technologies/html.svg'
					alt='Html icon'
				/>
				<img
					className={styles.css}
					src='/abra-cv/icons/technologies/css.svg'
					alt='Css icon'
				/>
				<img
					className={styles.scss}
					src='/abra-cv/icons/technologies/scss.svg'
					alt='Scss icon'
				/>
				<img
					className={styles.redux}
					src='/abra-cv/icons/technologies/redux.svg'
					alt='Redux icon'
				/>
			</article>
		</Tilt>
	)
}

export default Avatar
