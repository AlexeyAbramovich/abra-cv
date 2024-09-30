import { motion } from 'framer-motion'
import Footer from '../../layout/footer/Footer'
import Layout from '../../layout/layout/Layout'
import styles from './About.module.scss'
import Education from './components/education/Education'
import Goals from './components/goals/Goals'
import Gratitude from './components/gratitude/Gratitude'
import HardSkills from './components/hard-skills/HardSkills'
import Intro from './components/intro/Intro'
import WhyProgramming from './components/why-programming/WhyProgramming'
import { hardSkills, hardSkillsAdditionally } from './hard-skills'

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 1 }}
		>
			<Layout>
				<main className={styles.about_me}>
					<Intro />
					<WhyProgramming />
					<Education />
					<Goals />
					<HardSkills skills={hardSkills} title='Навыки' />
					<HardSkills skills={hardSkillsAdditionally} title='Дополнительно' />
					<Gratitude />
				</main>
			</Layout>
			<Footer />
		</motion.div>
	)
}

export default About
