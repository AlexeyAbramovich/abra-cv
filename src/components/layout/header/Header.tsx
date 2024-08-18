import Logo from './components/logo/Logo'
import Navigation from './components/navigation/Navigation'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Navigation />
		</header>
	)
}

export default Header
