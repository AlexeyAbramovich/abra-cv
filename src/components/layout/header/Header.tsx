import { useEffect, useRef, useState } from 'react'
import BurgerButton from './components/burger-menu/BurgerButton'
import Logo from './components/logo/Logo'
import Navigation from './components/navigation/Navigation'
import Sidebar from './components/sidebar/Sidebar'
import styles from './Header.module.scss'

const Header = () => {
	const [showSidebar, setShowSidebar] = useState(false)
	const btnRef = useRef<HTMLButtonElement | null>(null)
	const sidebarRef = useRef<HTMLBaseElement | null>(null)

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (e.target instanceof Element) {
				if (!e.target.closest('[data-nav]')) {
					if (showSidebar) {
						setShowSidebar(false)
						btnRef.current!!.classList.remove(`${styles.opened}`)
					}
				}
			} else {
				if (showSidebar) {
					setShowSidebar(false)
					btnRef.current!!.classList.remove(`${styles.opened}`)
				}
			}
		}
		document.body.addEventListener('click', handleClick)
		return () => {
			document.body.removeEventListener('click', handleClick)
		}
	}, [showSidebar])

	useEffect(() => {
		if (sidebarRef.current) {
			if (showSidebar) {
				sidebarRef.current.style.display = 'block'
				sidebarRef.current.classList.add(styles.slide_in)
				sidebarRef.current.classList.remove(styles.slide_out)
			} else {
				sidebarRef.current.classList.add(styles.slide_out)
				sidebarRef.current.classList.remove(styles.slide_in)
				if (sidebarRef.current.style.display) {
					setTimeout(() => {
						sidebarRef.current!!.style.display = 'none'
					}, 1000)
				}
			}
		}
	}, [showSidebar])

	return (
		<header className={styles.header}>
			<Logo />
			<Navigation type='header_navigation' />
			<BurgerButton
				btnRef={btnRef}
				showSidebar={showSidebar}
				setShowSidebar={setShowSidebar}
			/>
			<Sidebar sidebarRef={sidebarRef} />
		</header>
	)
}

export default Header
