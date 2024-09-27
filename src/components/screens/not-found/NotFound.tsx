import BgElements from '$ui/bg-elements/BgElements'
import Copyright from '$ui/copyright/Copyright'
import styles from './NotFound.module.scss'

const NotFound = () => {
	return (
		<article className={styles.not_found}>
			<img src='/abra-cv/icons/error-404.svg' alt='Error 404 page not found' />
			<h2>Страница не найдена</h2>
			<BgElements />
			<Copyright type='absolute' />
		</article>
	)
}

export default NotFound
