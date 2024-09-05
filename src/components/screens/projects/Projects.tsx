import Footer from '../../layout/footer/Footer'
import Layout from '../../layout/layout/Layout'
import ProjectInfo from './components/project-info/ProjectInfo'
import { projects } from './data/projects'
import styles from './Projects.module.scss'

const Projects = () => {
	return (
		<>
			<Layout>
				<article className={styles.projects}>
					{projects.map((projectInfo) => (
						<ProjectInfo key={projectInfo.name} projectInfo={projectInfo} />
					))}
				</article>
			</Layout>
			<Footer />
		</>
	)
}

export default Projects
