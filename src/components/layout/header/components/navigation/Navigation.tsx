import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

const Navigation = () => {
	return (
		<nav className={styles.header_navigation}>
			<Link to='/'>Главная</Link>
			<Link to='/about'>Обо мне</Link>
			<Link to='/projects'>Проекты</Link>
			<Link to='/contacts'>Контакты</Link>
		</nav>
	)
}

export default Navigation
