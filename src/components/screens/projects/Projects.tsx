import { motion } from 'framer-motion'
import Footer from '../../layout/footer/Footer'
import Layout from '../../layout/layout/Layout'
import ProjectInfo from './components/project-info/ProjectInfo'
import { projects } from './data/projects'
import styles from './Projects.module.scss'

const Projects = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 1 }}
		>
			<Layout>
				<article className={styles.projects}>
					{projects.map((projectInfo) => (
						<ProjectInfo key={projectInfo.name} projectInfo={projectInfo} />
					))}
				</article>
			</Layout>
			<Footer />
		</motion.div>
	)
}

export default Projects
