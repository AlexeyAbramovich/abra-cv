import { Link } from 'react-router-dom'
import styles from './InstagramLink.module.scss'
import InstagramSvg from './InstagramSvg'

const InstagramLink = () => {
	return (
		<Link
			className={styles.instagram}
			to='https://www.instagram.com/ilyalupach'
			target='blank'
			aria-label='Link to Ilya instagram'
		>
			<InstagramSvg />
		</Link>
	)
}

export default InstagramLink
