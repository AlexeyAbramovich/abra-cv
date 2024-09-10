import cn from 'clsx'
import GithubLink from '../github-link/GithubLink'
import styles from './Copyright.module.scss'

const Copyright = ({ type }: { type: string }) => {
	return (
		<div
			className={cn(
				type === 'footer' ? styles.copyright_footer : styles.copyright_absolute
			)}
		>
			<img src='/icons/copyright.svg' alt='Copyright' />
			<p>Copyright А. Д. Абрамович, 2024</p>
			<GithubLink
				link='https://github.com/AlexeyAbramovich'
				size='small'
				label='Open the author github profile'
			/>
		</div>
	)
}

export default Copyright
