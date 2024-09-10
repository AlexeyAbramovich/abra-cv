import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from './components/Input'
import Notifications from './components/Notifications'
import SendButton from './components/SendButton'
import TextArea from './components/TextArea'
import styles from './ContactsForm.module.scss'
import { useErrorNotification } from './hooks/useErrorNotification'
import { useSuccessNotification } from './hooks/useSuccessNotification'

export type FormInput = {
	name: string
	email: string
	message: string
}

const ContactsForm = () => {
	const [isDataSent, setIsDataSent] = useState(false)
	const [isApiLimitReached, setIsApiLimitReached] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<FormInput>()

	useSuccessNotification(isDataSent, setIsDataSent)

	useErrorNotification(isApiLimitReached, setIsApiLimitReached)

	const onSubmit: SubmitHandler<FormInput> = async (formData) => {
		const json = JSON.stringify({
			...formData,
			access_key: '69c6fe38-8754-4972-b59b-ebe9510b9b4e'
		})

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		})

		const data = await response.json()

		if (data.success) {
			setIsDataSent(true)
		} else {
			setIsApiLimitReached(true)
		}
		reset()
	}

	return (
		<>
			<Notifications
				isDataSent={isDataSent}
				isApiLimitReached={isApiLimitReached}
			/>
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
					title='Ваш Email:'
					register={register}
					registerName={'email'}
					placeholder='Email'
					error={errors.email?.message}
					type='email'
					maxLength={100}
				/>
				<TextArea error={errors?.message?.message} register={register} />
				<SendButton />
			</form>
		</>
	)
}

export default ContactsForm
