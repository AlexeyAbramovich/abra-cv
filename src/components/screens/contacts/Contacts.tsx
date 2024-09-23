import BgElements from '$ui/bg-elements/BgElements'
import Copyright from '$ui/copyright/Copyright'
import Feedback from '$ui/feedback/Feedback'
import Layout from '../../layout/layout/Layout'
import ContactsForm from './components/contact-form/ContactsForm'
import ContactsInfo from './components/contact-info/ContactsInfo'
import styles from './Contacts.module.scss'

const Contacts = () => {
	return (
		<div className={styles.contacts_wrapper}>
			<Layout>
				<article className={styles.contacts}>
					<Feedback type='mobile' />
					<section className={styles.contactsForm_wrapper}>
						<h2>Написать мне</h2>
						<ContactsForm />
					</section>
					<section className={styles.contactsInfo_wrapper}>
						<h2>Контакты</h2>
						<ContactsInfo />
					</section>
				</article>
			</Layout>

			<BgElements onContactPage={true} />
			<Copyright type='absolute' />
		</div>
	)
}

export default Contacts
