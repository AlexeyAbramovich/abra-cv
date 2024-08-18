export function formatTime(seconds: number) {
	const minutes = Math.floor(seconds / 60)
	const remainingSeconds = Math.floor(seconds % 60)
	const formattedSeconds = remainingSeconds.toString().padStart(2, '0')
	return `${minutes}:${formattedSeconds}`
}
