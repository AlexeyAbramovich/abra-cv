import { useEffect } from 'react'
import styles from '../Header.module.scss'

export const useShowSidebar = (
	btnRef: React.MutableRefObject<HTMLButtonElement | null>,
	showSidebar: boolean,
	setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
) => {
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
}
