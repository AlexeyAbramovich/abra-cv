import { useMemo, useRef } from 'react'
import { Song } from '../types'

export const useControllers = () => {
	const player = useRef<HTMLDivElement | null>(null)
	const volume = useRef<HTMLInputElement | null>(null)
	const songImg = useRef<HTMLImageElement | null>(null)
	const songName = useRef<HTMLSpanElement | null>(null)
	const songArtist = useRef<HTMLSpanElement | null>(null)
	const progress = useRef<HTMLInputElement | null>(null)
	const song = useRef<HTMLAudioElement | null>(null)
	const ctrlIcon = useRef<HTMLImageElement | null>(null)
	const ctrlBtn = useRef<HTMLButtonElement | null>(null)
	const prev = useRef<HTMLButtonElement | null>(null)
	const next = useRef<HTMLButtonElement | null>(null)
	const songCurrentTime = useRef<HTMLSpanElement | null>(null)
	const songEndTime = useRef<HTMLSpanElement | null>(null)
	const visualizer = useRef<HTMLDivElement | null>(null)
	const interval = useRef<number | null>(null)
	const playlistQueue = useRef<Song[]>([])

	return useMemo(
		() => ({
			player,
			volume,
			songImg,
			songName,
			songArtist,
			progress,
			song,
			ctrlBtn,
			ctrlIcon,
			prev,
			next,
			songCurrentTime,
			songEndTime,
			visualizer,
			interval,
			playlistQueue
		}),
		[]
	)
}
