import BgElements from '$ui/bg-elements/BgElements'
import Copyright from '$ui/copyright/Copyright'
import { motion } from 'framer-motion'
import Avatar from './components/avatar/Avatar'
import Buttons from './components/buttons/Buttons'
import WelcomeText from './components/welcome-text/WelcomeText'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<motion.main
			className={styles.home}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 1 }}
		>
			<article className={styles.wrapper}>
				<WelcomeText />
				<Buttons />
			</article>

			<BgElements />

			<Avatar />

			<Copyright type='absolute' onHomePage={true} />
		</motion.main>
	)
}

export default Home
