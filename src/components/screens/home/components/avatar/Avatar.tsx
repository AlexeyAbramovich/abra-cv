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
				<img className={styles.js} src='/icons/js.svg' alt='JavaScript icon' />
				<img className={styles.ts} src='/icons/ts.svg' alt='TypeScript icon' />
				<img className={styles.react} src='/icons/react.svg' alt='React Icon' />
				<img className={styles.vite} src='/icons/vite.svg' alt='Vite icon' />
				<img className={styles.html} src='/icons/html-5.svg' alt='Html icon' />
				<img className={styles.css} src='/icons/css-3.svg' alt='Css icon' />
				<img className={styles.scss} src='/icons/scss.svg' alt='Scss icon' />
				<img className={styles.redux} src='/icons/redux.svg' alt='Redux icon' />
			</div>
		</Tilt>
	)
}

export default Avatar
