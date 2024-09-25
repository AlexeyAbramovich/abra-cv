import styles from '../ContactsForm.module.scss'

const Notifications = ({
	isDataSent,
	isError
}: {
	isDataSent: boolean
	isError: boolean
}) => {
	return (
		<>
			{isDataSent && (
				<span className={styles.notification_success}>
					Сообщение отправлено успешно
				</span>
			)}
			{isError && (
				<span className={styles.notification_error}>
					Ошибка при отправке сообщения
				</span>
			)}
		</>
	)
}

export default Notifications
