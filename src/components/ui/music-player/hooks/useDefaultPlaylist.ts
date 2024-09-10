import { useEffect } from 'react'
import { music } from '../data/data'
import { useMusicStore } from './useMusicStore'

export const useDefaultPlaylist = () => {
	const setCurrentPlaylist = useMusicStore((state) => state.setCurrentPlaylist)

	useEffect(() => {
		setCurrentPlaylist(music.filter((song) => song.playlist === 'Relax'))
	}, [])
}
