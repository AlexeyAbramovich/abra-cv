import cn from 'clsx'
import { Link } from 'react-router-dom'
import styles from './GithubLink.module.scss'
import GithubSvg from './GithubSvg'

type Props = {
	link: string
	size: string
	label: string
}

const GithubLink = ({ link, size, label }: Props) => {
	return (
		<Link
			className={cn(
				size === 'big' ? styles.githubLink_big : styles.githubLink_small
			)}
			aria-label={label}
			to={link}
			target='blank'
		>
			<GithubSvg />
		</Link>
	)
}

export default GithubLink
