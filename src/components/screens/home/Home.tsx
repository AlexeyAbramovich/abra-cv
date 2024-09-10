import BgElements from '../../ui/bg-elements/BgElements'
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

			<BgElements />

			<Avatar />

			<Copyright type='absolute' />
		</article>
	)
}

export default Home
