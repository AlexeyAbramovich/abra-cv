import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useMusicStore } from '../../../hooks/useMusicStore'

export const useCheckVisualizer = () => {
	const {
		visualizerWasSet,
		setVisualizerWasSet,
		needCheckVisualizer,
		setNeedCheckVisualizer
	} = useMusicStore(
		useShallow((state) => ({
			visualizerWasSet: state.visualizerWasSet,
			setVisualizerWasSet: state.setVisualizerWasSet,
			needCheckVisualizer: state.needCheckVisualizer,
			setNeedCheckVisualizer: state.setNeedCheckVisualizer
		}))
	)

	useEffect(() => {
		if (needCheckVisualizer && !visualizerWasSet) {
			setVisualizerWasSet(true)
		}
		setNeedCheckVisualizer(false)
	}, [needCheckVisualizer, visualizerWasSet])
}
