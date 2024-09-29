import { useRef, useState } from 'react'
import BurgerButton from './components/burger-menu/BurgerButton'
import Logo from './components/logo/Logo'
import Navigation from './components/navigation/Navigation'
import Sidebar from './components/sidebar/Sidebar'
import styles from './Header.module.scss'
import { useShowSidebar } from './hooks/useShowSidebar'
import { useSidebarAnimation } from './hooks/useSidebarAnimation'

const Header = () => {
	const [showSidebar, setShowSidebar] = useState(false)
	const sidebarRef = useRef<HTMLBaseElement | null>(null)

	useShowSidebar(showSidebar, setShowSidebar)

	useSidebarAnimation(showSidebar, sidebarRef)

	return (
		<header className={styles.header}>
			<Logo />
			<Navigation type='header_navigation' />
			<BurgerButton showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
			<Sidebar sidebarRef={sidebarRef} />
		</header>
	)
}

export default Header
