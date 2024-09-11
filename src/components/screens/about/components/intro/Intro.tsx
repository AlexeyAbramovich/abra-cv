import Avatar from './components/Avatar'
import WayInFrontend from './components/WayInFrontend'
import styles from './Intro.module.scss'

const Intro = () => {
	return (
		<section className={styles.intro}>
			<Avatar />
			<WayInFrontend />
		</section>
	)
}

export default Intro
