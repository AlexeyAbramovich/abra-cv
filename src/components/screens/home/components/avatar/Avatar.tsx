import Tilt from 'react-parallax-tilt'
import styles from './Avatar.module.scss'

const Avatar = () => {
	return (
		<Tilt className={styles.avatarWrapper}>
			<div className={styles.avatar}>
				<img
					src='/images/photo.jpg'
					className={styles.photo}
					alt='Photo of Alexey Abramovich, the author of this cv-site'
				/>
				<img
					className={styles.js}
					src='/icons/technologies/javascript.svg'
					alt='JavaScript icon'
				/>
				<img
					className={styles.ts}
					src='/icons/technologies/typescript.svg'
					alt='TypeScript icon'
				/>
				<img
					className={styles.react}
					src='/icons/technologies/react.svg'
					alt='React Icon'
				/>
				<img
					className={styles.vite}
					src='/icons/technologies/vite.svg'
					alt='Vite icon'
				/>
				<img
					className={styles.html}
					src='/icons/technologies/html.svg'
					alt='Html icon'
				/>
				<img
					className={styles.css}
					src='/icons/technologies/css.svg'
					alt='Css icon'
				/>
				<img
					className={styles.scss}
					src='/icons/technologies/scss.svg'
					alt='Scss icon'
				/>
				<img
					className={styles.redux}
					src='/icons/technologies/redux.svg'
					alt='Redux icon'
				/>
			</div>
		</Tilt>
	)
}

export default Avatar
