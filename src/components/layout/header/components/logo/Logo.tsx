import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

const Logo = () => {
	return (
		<Link to={'/'} className={styles.logo}>
			<h2 className={styles.neon}>{'</>'}</h2>
			<h2 className={styles.neon}>ABRA</h2>
		</Link>
	)
}

export default Logo
