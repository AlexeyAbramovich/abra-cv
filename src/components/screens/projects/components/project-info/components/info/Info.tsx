import GithubLink from '../../../../../../ui/github-link/GithubLink'
import { Props } from '../../ProjectInfo'
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
			<GithubLink
				link={projectInfo.link}
				size='absolute'
				label='Open the project repository on github'
			/>
		</div>
	)
}

export default Info
