import { Props } from '../../ProjectInfo'
import GithubLink from './components/github-link/GithubLink'
import Stack from './components/stack/Stack'
import styles from './Info.module.scss'

const Info = ({ projectInfo }: Props) => {
	return (
		<div className={styles.info}>
			<h2>{projectInfo.name}</h2>
			<p>{projectInfo.description}</p>
			<ul>
				{projectInfo.features.map((feature, i) => (
					<li key={`${projectInfo.name}_feature_${i}`}>{feature}</li>
				))}
			</ul>
			<Stack
				projectName={projectInfo.name}
				technologies={projectInfo.technologies}
			/>
			<GithubLink link={projectInfo.link} />
		</div>
	)
}

export default Info
