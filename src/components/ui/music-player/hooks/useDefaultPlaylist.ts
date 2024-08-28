import { useEffect } from 'react'
import { music } from '../data/data'
import { useMusicContext } from './useMusicContext'

export const useDefaultPlaylist = () => {
	const { setCurrentPlaylist } = useMusicContext()

	useEffect(() => {
		setCurrentPlaylist(music.filter((song) => song.playlist === 'Relax'))
	}, [])
}
