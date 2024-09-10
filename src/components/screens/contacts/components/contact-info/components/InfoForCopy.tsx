import copy from 'copy-to-clipboard'
import styles from '../ContactsInfo.module.scss'
import { CopyText } from '../hooks/useCopyText'

type Props = {
	type: 'phone' | 'gmail' | 'skype'
	flag: boolean
	text: string
	setCopyText: React.Dispatch<React.SetStateAction<CopyText>>
}

const InfoForCopy = ({ type, flag, text, setCopyText }: Props) => {
	return (
		<span className={styles.infoForCopy}>
			<img src={`/icons/contacts/${type}.svg`} alt={type} />
			{type === 'phone' && (
				<img src='/icons/contacts/whatsapp.svg' alt='whatsapp' />
			)}
			<span
				onClick={() => {
					copy(text)
					setCopyText((prev) => ({ ...prev, [type]: true }))
				}}
			>
				{text}
			</span>
			{flag && (
				<div>
					<img src='/icons/copy.svg' />
					<span>Скопировано</span>
				</div>
			)}
		</span>
	)
}

export default InfoForCopy
