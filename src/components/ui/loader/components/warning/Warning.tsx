import cn from 'clsx'
import styles from '../../Loader.module.scss'
import { useWarning } from './useWarning'

const Warning = () => {
	const { isJoke, hideWarning, warningText } = useWarning()

	return (
		<div className={cn(styles.warning, hideWarning && 'none')}>
			<img
				className={cn(isJoke && 'none')}
				src='/abra-cv/icons/error.svg'
				alt='Error loading site'
			/>
			<span
				ref={warningText}
				className={cn(styles.warningText, isJoke && styles.warningText_joke)}
			>
				Не удалось загрузить сайт. <br />
				Нет подключения к интернету.
			</span>
		</div>
	)
}

export default Warning
