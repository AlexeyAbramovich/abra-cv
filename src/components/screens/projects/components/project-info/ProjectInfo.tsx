import { Project } from '../../data/projects'
import Carousel from './components/carousel/Carousel'
import Info from './components/info/Info'
import styles from './ProjectInfo.module.scss'

export type Props = {
	projectInfo: Project
}

const ProjectInfo = ({ projectInfo }: Props) => {
	return (
		<div className={styles.borderAnimationWrapper}>
			<div className={styles.projectInfo}>
				<Carousel projectName={projectInfo.name} slides={projectInfo.preview} />
				<Info projectInfo={projectInfo} />
			</div>
		</div>
	)
}

export default ProjectInfo
