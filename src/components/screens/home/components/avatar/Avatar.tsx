import Tilt from 'react-parallax-tilt'
import styles from './Avatar.module.scss'

const Avatar = () => {
	return (
		<Tilt>
			<div className={styles.avatar}>
				<img
					src='/images/photo.jpg'
					className={styles.photo}
					alt='Photo of Alexey Abramovich, the author of this cv-site'
				/>
				<img
					className={styles.js}
					src='/src/assets/icons/js.svg'
					alt='JavaScript icon'
				/>
				<img
					className={styles.ts}
					src='/src/assets/icons/ts.svg'
					alt='TypeScript icon'
				/>
				<img
					className={styles.react}
					src='/src/assets/icons/react.svg'
					alt='React Icon'
				/>
				<img
					className={styles.vite}
					src='/src/assets/icons/vite.svg'
					alt='Vite icon'
				/>
				<img
					className={styles.html}
					src='/src/assets/icons/html-5.svg'
					alt='Html icon'
				/>
				<img
					className={styles.css}
					src='/src/assets/icons/css-3.svg'
					alt='Css icon'
				/>
				<img
					className={styles.scss}
					src='/src/assets/icons/scss.svg'
					alt='Scss icon'
				/>
				<img
					className={styles.redux}
					src='/src/assets/icons/redux.svg'
					alt='Redux icon'
				/>
			</div>
		</Tilt>
	)
}

export default Avatar
