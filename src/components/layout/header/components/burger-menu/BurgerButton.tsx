import cn from 'clsx'
import styles from './BurgerButton.module.scss'

type Props = {
	showSidebar: boolean
	setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const BurgerButton = ({ showSidebar, setShowSidebar }: Props) => {
	const handleClick = () => {
		setShowSidebar(!showSidebar)
	}

	return (
		<button
			className={cn(styles.burger_btn, showSidebar && styles.open)}
			onClick={() => handleClick()}
			data-nav='nav'
			aria-label='Menu button'
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	)
}

export default BurgerButton
