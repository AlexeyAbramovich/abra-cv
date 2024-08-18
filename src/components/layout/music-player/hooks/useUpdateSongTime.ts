import { formatTime } from '../utils/format-time.util'
import { useControllers } from './useControllers'

export const useUpdateSongTime = (currentTime: number) => {
	const { songCurrentTime } = useControllers()
	if (songCurrentTime.current) {
		songCurrentTime.current.textContent = formatTime(currentTime)
	}
}
