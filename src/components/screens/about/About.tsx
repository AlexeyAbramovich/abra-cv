import Footer from '../../layout/footer/Footer'
import Layout from '../../layout/layout/Layout'
import styles from './About.module.scss'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import HardSkills from './components/hard-skills/HardSkills'
import Intro from './components/intro/Intro'
import { hardSkills, hardSkillsAdditionally } from './hard-skills'

const About = () => {
	return (
		<>
			<Layout>
				<article className={styles.about_me}>
					<Intro />
					<Experience />
					<Education />
					<HardSkills skills={hardSkills} title='Что Могю' />
					<HardSkills skills={hardSkillsAdditionally} title='Дополнительно' />
				</article>
			</Layout>
			<Footer />
		</>
	)
}

export default About
