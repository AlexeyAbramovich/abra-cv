import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

const Navigation = ({ type }: { type: string }) => {
	return (
		<nav className={styles[type]} data-nav='nav'>
			<Link to='/' data-nav='nav'>
				Главная
			</Link>
			<Link to='/about' data-nav='nav'>
				Обо мне
			</Link>
			<Link to='/projects' data-nav='nav'>
				Проекты
			</Link>
			<Link to='/contacts' data-nav='nav'>
				Контакты
			</Link>
		</nav>
	)
}

export default Navigation
