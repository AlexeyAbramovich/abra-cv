import copy from 'copy-to-clipboard'
import { useEffect, useState } from 'react'
import GithubLink from '../../../../ui/github-link/GithubLink'
import LinkedInLink from './components/links/LinkedInLink'
import TelegramLink from './components/links/TelegramLink'
import styles from './ContactsInfo.module.scss'

const ContactsInfo = () => {
	const [copyText, setCopyText] = useState({
		phone: false,
		gmail: false,
		skype: false
	})

	useEffect(() => {
		if (copyText.phone) {
			setTimeout(() => setCopyText((prev) => ({ ...prev, phone: false })), 1000)
		}
	}, [copyText.phone])

	useEffect(() => {
		if (copyText.gmail) {
			setTimeout(() => setCopyText((prev) => ({ ...prev, gmail: false })), 1000)
		}
	}, [copyText.gmail])

	useEffect(() => {
		if (copyText.skype) {
			setTimeout(() => setCopyText((prev) => ({ ...prev, skype: false })), 1000)
		}
	}, [copyText.skype])

	return (
		<div className={styles.contacts_info}>
			<div className={styles.social_network_wrapper}>
				<TelegramLink />
				<LinkedInLink />
				<GithubLink
					size='big'
					link='https://github.com/AlexeyAbramovich'
					label='open the author github profile'
				/>
			</div>
			<span className={styles.phone}>
				<img src='/icons/contacts/phone.svg' />
				<img src='/icons/contacts/whatsapp.svg' />
				<span
					onClick={() => {
						copy('+375333216278')
						setCopyText((prev) => ({ ...prev, phone: true }))
					}}
				>
					+375(33)321-62-78
				</span>
				{copyText.phone && (
					<div>
						<img src='/icons/copy.svg' />
						<span>Скопировано</span>
					</div>
				)}
			</span>
			<span className={styles.gmail}>
				<img src='/icons/contacts/gmail.svg' />
				<span
					onClick={() => {
						copy('alexabramovichwork@gmail.com')
						setCopyText((prev) => ({ ...prev, gmail: true }))
					}}
				>
					alexabramovichwork@gmail.com
				</span>
				{copyText.gmail && (
					<div>
						<img src='/icons/copy.svg' />
						<span>Скопировано</span>
					</div>
				)}
			</span>
			<span className={styles.skype}>
				<img src='/icons/contacts/skype.svg' />
				<span
					onClick={() => {
						copy('live:.cid.acee360531dc3115')
						setCopyText((prev) => ({ ...prev, skype: true }))
					}}
				>
					live:.cid.acee360531dc3115
				</span>
				{copyText.skype && (
					<div>
						<img src='/icons/copy.svg' />
						<span>Скопировано</span>
					</div>
				)}
			</span>
			<span className={styles.location}>
				<img src='/icons/contacts/location.svg' />
				<span>г. Гродно, Республика Беларусь</span>
			</span>
			<span>* Готов к переезду внутри РБ на время испытательного срока</span>
		</div>
	)
}

export default ContactsInfo
