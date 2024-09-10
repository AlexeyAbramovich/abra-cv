import styles from '../ContactsForm.module.scss'

const ErrorMessage = ({ message }: { message: string }) => {
	return <span className={styles.error}>{message}</span>
}

export default ErrorMessage
