import Footer from '../../layout/footer/Footer'
import Layout from '../../layout/layout/Layout'
import styles from './About.module.scss'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Intro from './components/intro/Intro'

const About = () => {
	return (
		<>
			<Layout>
				<article className={styles.about_me}>
					<Intro />
					<Experience />
					<Education />
				</article>
			</Layout>
			<Footer />
		</>
	)
}

export default About
