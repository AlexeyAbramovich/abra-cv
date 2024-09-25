import { motion } from 'framer-motion'
import Footer from '../../layout/footer/Footer'
import Layout from '../../layout/layout/Layout'
import styles from './About.module.scss'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Goals from './components/goals/Goals'
import Gratitude from './components/gratitude/Gratitude'
import HardSkills from './components/hard-skills/HardSkills'
import Intro from './components/intro/Intro'
import { hardSkills, hardSkillsAdditionally } from './hard-skills'

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 1 }}
		>
			<Layout>
				<article className={styles.about_me}>
					<Intro />
					<Experience />
					<Education />
					<Goals />
					<HardSkills skills={hardSkills} title='Что Могю' />
					<HardSkills skills={hardSkillsAdditionally} title='Дополнительно' />
					<Gratitude />
				</article>
			</Layout>
			<Footer />
		</motion.div>
	)
}

export default About
