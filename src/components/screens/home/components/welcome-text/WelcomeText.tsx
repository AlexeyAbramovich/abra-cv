import { TypeAnimation } from 'react-type-animation'
import styles from './WelcomeText.module.scss'

export const CURSOR_CLASS_NAME = 'index-module_type__E-SaG'

const WelcomeText = () => {
	return (
		<div className={styles.welcome}>
			<span>Привет!</span>

			<span>
				Я <span>Алексей Абрамович</span>
			</span>

			<TypeAnimation
				className={CURSOR_CLASS_NAME}
				sequence={[
					2000,
					'Крутой прогер, берите не пожалеете😉',
					1000,
					'React Frontend Developer',
					1000,
					'React Frontend Developer\nДобро пожаловать!',
					2000,
					(el) => el?.classList.remove(CURSOR_CLASS_NAME) // remove cursor after 2s
				]}
				speed={30}
				wrapper='span'
				cursor={true}
			/>

			<img src='/icons/development.svg' alt='' />

			<img src='/icons/code-svgrepo-com.svg' alt='' />
		</div>
	)
}

export default WelcomeText
