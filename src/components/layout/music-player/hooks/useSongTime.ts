import { useEffect } from 'react'
import { formatTime } from '../utils/format-time.util'
import { useControllers } from './useControllers'

export const useSongTime = (currentTime: number, duration: number) => {
	const { songCurrentTime, songEndTime } = useControllers()

	useEffect(() => {
		if (songCurrentTime.current && songEndTime.current) {
			songCurrentTime.current.textContent = formatTime(currentTime)
			songEndTime.current.textContent = formatTime(duration)
		}
	}, [songCurrentTime, songEndTime])
}
