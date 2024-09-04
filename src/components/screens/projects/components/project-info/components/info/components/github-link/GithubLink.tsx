import { Link } from 'react-router-dom'
import styles from './GithubLink.module.scss'
import GithubSvg from './components/GithubSvg'

const GithubLink = ({ link }: { link: string }) => {
	return (
		<Link
			className={styles.githubLink}
			aria-label='Open the project repository'
			to={link}
			target='blank'
		>
			<GithubSvg />
		</Link>
	)
}

export default GithubLink
