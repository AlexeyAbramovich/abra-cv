import GithubLink from '../../../../ui/github-link/GithubLink'
import Feedback from './components/Feedback'
import InfoForCopy from './components/InfoForCopy'
import LinkedInLink from './components/links/LinkedInLink'
import TelegramLink from './components/links/TelegramLink'
import Location from './components/Location'
import styles from './ContactsInfo.module.scss'
import { useCopy } from './hooks/useCopy'
import { useCopyText } from './hooks/useCopyText'

const ContactsInfo = () => {
	const { phone, gmail, skype, setCopyText } = useCopyText()

	useCopy(phone, 'phone', setCopyText)

	useCopy(gmail, 'gmail', setCopyText)

	useCopy(skype, 'skype', setCopyText)

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
			<InfoForCopy
				type='phone'
				flag={phone}
				text='+375(33)321-62-78'
				setCopyText={setCopyText}
			/>
			<InfoForCopy
				type='gmail'
				flag={gmail}
				text='alexabramovichwork@gmail.com'
				setCopyText={setCopyText}
			/>
			<InfoForCopy
				type='skype'
				flag={skype}
				text='live:.cid.acee360531dc3115'
				setCopyText={setCopyText}
			/>
			<Location />
			<Feedback />
		</div>
	)
}

export default ContactsInfo
