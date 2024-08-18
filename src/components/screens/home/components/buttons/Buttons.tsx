import styles from './Buttons.module.scss'
import AboutSvg from './components/AboutSvg'
import ContactSvg from './components/ContactSvg'

const Buttons = () => {
	return (
		<nav className={styles.buttonsWrapper}>
			<a href='#'>
				<AboutSvg />
				<span>Обо мне</span>
			</a>
			<a href='#'>
				<ContactSvg />
				<span>Контакты</span>
			</a>
		</nav>
	)
}

export default Buttons
