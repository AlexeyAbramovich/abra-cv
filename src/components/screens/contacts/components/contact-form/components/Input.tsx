import { UseFormRegister } from 'react-hook-form'
import { FormInput } from '../ContactsForm'
import ErrorMessage from './ErrorMessage'

type InputProps = {
	title: string
	error?: string
	register: UseFormRegister<FormInput>
	registerName: 'name' | 'email' | 'message'
	maxLength: number
	placeholder: string
	type: string
}

const Input = ({
	title,
	error,
	register,
	registerName,
	maxLength,
	placeholder,
	type
}: InputProps) => {
	return (
		<label>
			{title}
			{error && <ErrorMessage message={error} />}
			<input
				{...register(registerName, {
					required: '⚠ Поле является обязательным',
					maxLength: {
						value: maxLength,
						message: `⚠ ${placeholder} не может быть длиннее ${maxLength} символов`
					}
				})}
				placeholder={`${placeholder}...`}
				type={type}
			/>
		</label>
	)
}

export default Input
