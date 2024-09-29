import { useEffect } from 'react'

export const useShowSidebar = (
	showSidebar: boolean,
	setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
) => {
	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (e.target instanceof Element) {
				if (!e.target.closest('[data-nav]')) {
					if (showSidebar) {
						setShowSidebar(false)
					}
				}
			} else {
				if (showSidebar) {
					setShowSidebar(false)
				}
			}
		}
		document.body.addEventListener('click', handleClick)
		return () => {
			document.body.removeEventListener('click', handleClick)
		}
	}, [showSidebar])
}
