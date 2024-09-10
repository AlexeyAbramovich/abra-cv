import { create } from 'zustand'
import { Actions, Song, State } from '../types'

export const useMusicStore = create<State & Actions>((set) => ({
	visualizerWasSet: false,
	setVisualizerWasSet: (visualizerWasSet) => set({ visualizerWasSet }),
	currentPlaylist: null,
	setCurrentPlaylist: (currentPlaylist) => set({ currentPlaylist }),
	currentSong: null,
	setCurrentSong: (currentSong) => set({ currentSong }),
	isFirstLaunch: true,
	setIsFirstLaunch: (isFirstLaunch) => set({ isFirstLaunch }),
	isSongLoaded: false,
	setIsSongLoaded: (isSongLoaded) => set({ isSongLoaded }),
	needNewRandomSong: true,
	setNeedNewRandomSong: (needNewRandomSong) => set({ needNewRandomSong }),
	playlistQueue: [] as Song[],
	setPlaylistQueue: (playlistQueue) => set({ playlistQueue }),
	needCheckVisualizer: false,
	setNeedCheckVisualizer: (needCheckVisualizer) => set({ needCheckVisualizer }),
	activePlaylist: 'Relax',
	setActivePlaylist: (activePlaylist) => set({ activePlaylist }),
	showPlaylists: false,
	setShowPlaylists: (showPlaylists) => set({ showPlaylists }),
	stopUpdatingProgress: false,
	setStopUpdatingProgress: (stopUpdatingProgress) =>
		set({ stopUpdatingProgress })
}))
