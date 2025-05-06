import styles from '../Intro.module.scss'

const Avatar = () => {
	return (
		<div className={styles.avatar}>
			<div className={styles.animationWrapper}>
				<img src='/abra-cv/images/photo1.webp' alt='Author photo' />
			</div>
			<span style={{ color: 'white' }}>Алексей, 21 год.</span>
			<span>
				<span>React</span> <span style={{ color: 'white' }}>Frontend</span>{' '}
				<span>Developer</span>
			</span>
		</div>
	)
}

export default Avatar
