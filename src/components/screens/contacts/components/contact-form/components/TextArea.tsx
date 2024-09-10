import { UseFormRegister } from 'react-hook-form'
import { FormInput } from '../ContactsForm'
import ErrorMessage from './ErrorMessage'

type TextAreaProps = {
	error?: string
	register: UseFormRegister<FormInput>
}

const TextArea = ({ register, error }: TextAreaProps) => {
	return (
		<label>
			Текст сообщения:
			{error && <ErrorMessage message={error} />}
			<textarea
				{...register('message', {
					required: '⚠ Поле является обязательным',
					maxLength: {
						value: 3000,
						message: '⚠ Текст сообщения не может превышать 3000 символов'
					}
				})}
				placeholder='Текст...'
			/>
		</label>
	)
}

export default TextArea
