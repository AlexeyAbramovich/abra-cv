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
	// interval для сброса тряски обложки
	interval: React.MutableRefObject<number | null>
	// массив уже проигранных треков, нужен, чтобы при переключении треков не было повторов и были проиграны все песни
	playlistQueue: React.MutableRefObject<Song[]>
}

export type State = {
	// state для проверки был ли создан визуализатор, если не был, то создается один раз, state меняется при нажатиях на кнопки след/предыдущий рандомный трек и
	visualizerWasSet: boolean

	// текущий плейлист, содержит треки из выбранного плейлиста
	currentPlaylist: Song[] | null

	// песня которая сейчас проигрывается или будет проигрываться
	currentSong: Song | null

	// state нужен для проверки на первый запуск, чтобы песня не запускалась без нажатия на кнопку
	isFirstLaunch: boolean

	// state нужен для проверки загрузилась ли песня, чтобы её воспроизводить
	isSongLoaded: boolean

	// state для создания новой песни, на изменение этого state срабатывает useRandomSong
	needNewRandomSong: boolean

	// state нужен для изменения цвета элементов визуализатора при смене трека/плейлиста и их удаления, чтобы не было их переизбытка с каждым треком
	needCheckVisualizer: boolean

	// state для проверки активного плейлиста, чтобы повесить класс с выделением
	activePlaylist: string

	// state для показа/скрытия списка плейлистов
	showPlaylists: boolean

	// state для отслеживания проматывает ли юзер ползунок с прогрессом песни, нужен для отключения события ontimeupdate, чтобы не было бага с дёргающимся ползунком
	stopUpdatingProgress: boolean
}

export type Actions = {
	setVisualizerWasSet: (visualizerWasSet: boolean) => void
	setCurrentPlaylist: (currentPlaylist: Song[] | null) => void
	setCurrentSong: (currentSong: Song | null) => void
	setIsFirstLaunch: (isFirstLaunch: boolean) => void
	setIsSongLoaded: (isSongLoaded: boolean) => void
	setNeedNewRandomSong: (needNewRandomSong: boolean) => void
	setNeedCheckVisualizer: (needCheckVisualizer: boolean) => void
	setActivePlaylist: (activePlaylist: string) => void
	setShowPlaylists: (showPlaylists: boolean) => void
	setStopUpdatingProgress: (stopUpdatingProgress: boolean) => void
}
