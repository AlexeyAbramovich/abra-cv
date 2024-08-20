export type Song = {
	playlist: string
	name: string
	artist: string
	path: string
	cover: string
	visualizerColor: string
}

export type Controllers = {
	player: React.MutableRefObject<HTMLDivElement | null>
	volume: React.MutableRefObject<HTMLInputElement | null>
	songImg: React.MutableRefObject<HTMLImageElement | null>
	songName: React.MutableRefObject<HTMLSpanElement | null>
	songArtist: React.MutableRefObject<HTMLSpanElement | null>
	progress: React.MutableRefObject<HTMLInputElement | null>
	song: React.MutableRefObject<HTMLAudioElement | null>
	ctrlIcon: React.MutableRefObject<HTMLImageElement | null>
	ctrlBtn: React.MutableRefObject<HTMLButtonElement | null>
	prev: React.MutableRefObject<HTMLButtonElement | null>
	next: React.MutableRefObject<HTMLButtonElement | null>
	songCurrentTime: React.MutableRefObject<HTMLSpanElement | null>
	songEndTime: React.MutableRefObject<HTMLSpanElement | null>
	visualizer: React.MutableRefObject<HTMLDivElement | null>
	interval: React.MutableRefObject<number | null>
}

export type Store = {
	visualizerWasSet: boolean
	setVisualizerWasSet: React.Dispatch<React.SetStateAction<boolean>>
	currentPlaylist: Song[] | null
	setCurrentPlaylist: React.Dispatch<React.SetStateAction<Song[] | null>>
	currentSong: Song | null
	setCurrentSong: React.Dispatch<React.SetStateAction<Song | null>>
	isFirstLaunch: boolean
	setIsFirstLaunch: React.Dispatch<React.SetStateAction<boolean>>
	isSongLoaded: boolean
	setIsSongLoaded: React.Dispatch<React.SetStateAction<boolean>>
	needNewRandomSong: boolean
	setNeedNewRandomSong: React.Dispatch<React.SetStateAction<boolean>>
	playlistQueue: Song[]
	setPlaylistQueue: React.Dispatch<React.SetStateAction<Song[]>>
	needCheckVisualizer: boolean
	setNeedCheckVisualizer: React.Dispatch<React.SetStateAction<boolean>>
	activePlaylist: string
	setActivePlaylist: React.Dispatch<React.SetStateAction<string>>
	showPlaylists: boolean
	setShowPlaylists: React.Dispatch<React.SetStateAction<boolean>>
	stopUpdatingProgress: boolean
	setStopUpdatingProgress: React.Dispatch<React.SetStateAction<boolean>>
}

export type Properties = Controllers & Store
