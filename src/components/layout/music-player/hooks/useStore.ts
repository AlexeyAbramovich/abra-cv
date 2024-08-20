import { useState } from 'react'
import { Song } from '../types'

export const useStore = () => {
	// state для проверки был ли создан визуализатор, если не был, то создается один раз, state меняется при нажатиях на кнопки след/предыдущий рандомный трек и
	const [visualizerWasSet, setVisualizerWasSet] = useState(false)

	// текущий плейлист, содержит треки из выбранного плейлиста
	const [currentPlaylist, setCurrentPlaylist] = useState<Song[] | null>(null)

	// песня которая сейчас проигрывается или будет проигрываться
	const [currentSong, setCurrentSong] = useState<Song | null>(null)

	// state нужен для проверки на первый запуск, чтобы песня не запускалась без нажатия на кнопку
	const [isFirstLaunch, setIsFirstLaunch] = useState(true)

	// state нужен для проверки загрузилась ли песня, чтобы её воспроизводить
	const [isSongLoaded, setIsSongLoaded] = useState(false)

	// state для создания новой песни, на изменения этого state срабатывает useRandomSong
	const [needNewRandomSong, setNeedNewRandomSong] = useState(true)

	// массив уже проигранных треков, нужен, чтобы при переключении треков не было повторов и были проиграны все песни
	const [playlistQueue, setPlaylistQueue] = useState<Song[]>([])

	// state нужен для изменения цвета элементов при смене трека/плейлиста
	const [needCheckVisualizer, setNeedCheckVisualizer] = useState(false)

	// state для проверки активного плейлиста, чтобы повесить класс с выделением
	const [activePlaylist, setActivePlaylist] = useState('Relax')

	// state для показа/скрытия списка плейлистов
	const [showPlaylists, setShowPlaylists] = useState(false)

	// state для отслеживания проматывает ли юзер ползунок с прогрессом песни, нужен для отключения события ontimeupdate, чтобы не было бага с дёргающимся ползунком
	const [stopUpdatingProgress, setStopUpdatingProgress] = useState(false)

	return {
		visualizerWasSet,
		setVisualizerWasSet,
		currentPlaylist,
		setCurrentPlaylist,
		currentSong,
		setCurrentSong,
		isFirstLaunch,
		setIsFirstLaunch,
		isSongLoaded,
		setIsSongLoaded,
		needNewRandomSong,
		setNeedNewRandomSong,
		playlistQueue,
		setPlaylistQueue,
		needCheckVisualizer,
		setNeedCheckVisualizer,
		activePlaylist,
		setActivePlaylist,
		showPlaylists,
		setShowPlaylists,
		stopUpdatingProgress,
		setStopUpdatingProgress
	}
}
