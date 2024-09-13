import { useEffect } from 'react'
import styles from '../Header.module.scss'

export const useSidebarAnimation = (
	showSidebar: boolean,
	sidebarRef: React.MutableRefObject<HTMLBaseElement | null>
) => {
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
}
