import Copyright from '../../ui/copyright/Copyright'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Copyright type='footer' />
		</footer>
	)
}

export default Footer
