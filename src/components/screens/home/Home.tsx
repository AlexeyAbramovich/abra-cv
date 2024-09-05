import Copyright from '../../ui/copyright/Copyright'
import Avatar from './components/avatar/Avatar'
import Buttons from './components/buttons/Buttons'
import WelcomeText from './components/welcome-text/WelcomeText'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<article className={styles.home}>
			<div className={styles.wrapper}>
				<WelcomeText />
				<Buttons />
			</div>

			<span className={styles.bgBottomElement1} />
			<span className={styles.bgBottomElement2} />

			<span className={styles.bgTopElement1} />
			<span className={styles.bgTopElement2} />

			<Avatar />

			<Copyright type='absolute' />
		</article>
	)
}

export default Home
