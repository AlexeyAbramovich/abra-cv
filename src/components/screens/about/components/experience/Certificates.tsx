import styles from './Experience.module.scss'

const Certificates = () => {
	return (
		<div className={styles.certificates}>
			<img
				src='/images/certificates/android.webp'
				alt='Certificate for Android Course'
			/>
			<img src='/images/certificates/qa.webp' alt='Certificate for QA Course' />
		</div>
	)
}

export default Certificates
