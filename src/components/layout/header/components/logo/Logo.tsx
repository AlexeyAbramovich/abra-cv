import styles from './Logo.module.scss'

const Logo = () => {
	return (
		<div className={styles.logo}>
			<h2 className={styles.neon}>{'</>'}</h2>
			<h2 className={styles.neon}>ABRA</h2>
		</div>
	)
}

export default Logo
