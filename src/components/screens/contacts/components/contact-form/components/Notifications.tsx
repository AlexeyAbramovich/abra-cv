import styles from '../ContactsForm.module.scss'

const Notifications = ({
	isDataSent,
	isApiLimitReached
}: {
	isDataSent: boolean
	isApiLimitReached: boolean
}) => {
	return (
		<>
			{isDataSent && (
				<span className={styles.notification_success}>
					Сообщение отправлено успешно
				</span>
			)}
			{isApiLimitReached && (
				<span className={styles.notification_error}>
					Достигнут лимит в 250 сообщений
					<br />
					в месяц на бесплатном api
					<br />
					web3forms.com для отправки Email
				</span>
			)}
		</>
	)
}

export default Notifications
