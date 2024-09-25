import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from './components/Input'
import Notifications from './components/Notifications'
import SendButton from './components/SendButton'
import TextArea from './components/TextArea'
import styles from './ContactsForm.module.scss'
import { useErrorNotification } from './hooks/useErrorNotification'
import { useSuccessNotification } from './hooks/useSuccessNotification'

const BASE_URL = `https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/`

export type FormInput = {
	name: string
	email: string
	message: string
}

const ContactsForm = () => {
	const [isDataSent, setIsDataSent] = useState(false)
	const [isError, setIsError] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<FormInput>()

	useSuccessNotification(isDataSent, setIsDataSent)

	useErrorNotification(isError, setIsError)

	const onSubmit: SubmitHandler<FormInput> = async (formData) => {
		const message = `Имя: ${formData.name}%0A%0Aemail|tg: ${formData.email}%0A%0AТекст: ${formData.message}`

		const response = await fetch(
			`${BASE_URL}sendMessage?chat_id=-${import.meta.env.VITE_CHAT_ID}&text=${message}`
		)

		if (response.ok) {
			setIsDataSent(true)
		} else {
			setIsError(true)
		}
		reset()
	}

	return (
		<>
			<Notifications isDataSent={isDataSent} isError={isError} />
			<form
				className={styles.contacts_form}
				action=''
				onSubmit={handleSubmit(onSubmit)}
			>
				<Input
					title='Ваше Имя:'
					register={register}
					registerName={'name'}
					placeholder='Имя'
					error={errors?.name?.message}
					type='text'
					maxLength={50}
				/>
				<Input
					title='Ваш Email или Telegram:'
					register={register}
					registerName={'email'}
					placeholder='Email или @TelegramNickname'
					error={errors.email?.message}
					type='text'
					maxLength={50}
				/>
				<TextArea error={errors?.message?.message} register={register} />
				<SendButton />
			</form>
		</>
	)
}

export default ContactsForm
