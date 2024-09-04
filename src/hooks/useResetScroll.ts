import { useEffect } from 'react'
import { Location } from 'react-router-dom'

export const useResetScroll = (path: Location<any>) => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [path])
}
