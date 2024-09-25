import cn from 'clsx'
import styles from '../ContactsForm.module.scss'

const ErrorMessage = ({ message }: { message?: string }) => {
	return (
		<span className={cn(styles.error, message && styles.error_show)}>
			{message ? message : 'empty'}
		</span>
	)
}

export default ErrorMessage
