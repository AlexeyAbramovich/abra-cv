import cn from 'clsx'
import GithubLink from '../github-link/GithubLink'
import styles from './Copyright.module.scss'

const Copyright = ({
	type,
	onHomePage
}: {
	type: string
	onHomePage?: boolean
}) => {
	return (
		<div
			className={cn(
				type === 'footer' ? styles.copyright_footer : styles.copyright_absolute,
				onHomePage && styles.copyright_absolute_home
			)}
		>
			<img src='/abra-cv/icons/copyright.svg' alt='Copyright' />
			<p>Copyright&nbsp;А.&nbsp;Д.&nbsp;Абрамович,&nbsp;2024</p>
			<GithubLink
				link='https://github.com/AlexeyAbramovich'
				size='small'
				label='Open the author github profile'
			/>
		</div>
	)
}

export default Copyright
