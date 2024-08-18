import { useEffect } from 'react'
import { useMusicContext } from './useMusicContext'

export const useCheckVisualizer = () => {
	const {
		visualizerWasSet,
		setVisualizerWasSet,
		needCheckVisualizer,
		setNeedCheckVisualizer
	} = useMusicContext()

	useEffect(() => {
		if (needCheckVisualizer && !visualizerWasSet) {
			setVisualizerWasSet(true)
		}
		setNeedCheckVisualizer(false)
	}, [needCheckVisualizer, visualizerWasSet])
}
