import { Link } from 'react-router-dom'
import styles from './Buttons.module.scss'
import AboutSvg from './components/AboutSvg'
import ContactSvg from './components/ContactSvg'

const Buttons = () => {
	return (
		<nav className={styles.buttonsWrapper}>
			<Link to='/about'>
				<AboutSvg />
				<span>Обо мне</span>
			</Link>
			<Link to='/contacts'>
				<ContactSvg />
				<span>Контакты</span>
			</Link>
		</nav>
	)
}

export default Buttons
