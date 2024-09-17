import cn from 'clsx'
import styles from './BgElements.module.scss'

const BgElements = ({ onContactPage }: { onContactPage?: boolean }) => {
	return (
		<>
			<span
				className={cn(
					styles.bgBottomElement1,
					onContactPage && styles.bgElement_none
				)}
			/>
			<span
				className={cn(
					styles.bgBottomElement2,
					onContactPage && styles.bgElement_none
				)}
			/>

			<span
				className={cn(
					styles.bgTopElement1,
					onContactPage && styles.bgElement_none
				)}
			/>
			<span
				className={cn(
					styles.bgTopElement2,
					onContactPage && styles.bgElement_none
				)}
			/>
		</>
	)
}

export default BgElements
