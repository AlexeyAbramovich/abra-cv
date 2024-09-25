import styles from '../ContactsInfo.module.scss'

const Location = () => {
	return (
		<span className={styles.location}>
			<img src='/icons/contacts/location.svg' alt='Location' />
			<span>г. Гродно, Республика Беларусь</span>
		</span>
	)
}

export default Location
