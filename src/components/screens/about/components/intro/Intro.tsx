import Avatar from './components/Avatar'
import Summary from './components/Summary'
import styles from './Intro.module.scss'

const Intro = () => {
	return (
		<section className={styles.intro}>
			<Avatar />
			<Summary />
		</section>
	)
}

export default Intro
