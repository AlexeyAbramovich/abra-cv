import { useCallback } from 'react'
import { useShallow } from 'zustand/react/shallow'
import ControlButtons from './components/control-buttons/ControlButtons'
import MusicProgress from './components/music-progress/MusicProgress'
import PlaylistsButton from './components/playlists-button/PlaylistsButton'
import Playlists from './components/playlists/Playlists'
import SongAudio from './components/song-audio/SongAudio'
import TrackInfo from './components/track-info/TrackInfo'
import Visualizer from './components/visualizer/Visualizer'
import Volume from './components/volume/Volume'
import { useDefaultPlaylist } from './hooks/useDefaultPlaylist'
import { useMusicContext } from './hooks/useMusicContext'
import { useMusicStore } from './hooks/useMusicStore'
import { useShowMusicPlayer } from './hooks/useShowMusicPlayer'
import styles from './MusicPlayer.module.scss'

const MusicPlayer = ({ showMusicPlayer }: { showMusicPlayer: boolean }) => {
	const { player, songImg, song, ctrlIcon, animationFrame } = useMusicContext()

	const {
		isFirstLaunch,
		setIsFirstLaunch,
		setNeedNewRandomSong,
		setNeedCheckVisualizer
	} = useMusicStore(
		useShallow((state) => ({
			isFirstLaunch: state.isFirstLaunch,
			setIsFirstLaunch: state.setIsFirstLaunch,
			setNeedNewRandomSong: state.setNeedNewRandomSong,
			setNeedCheckVisualizer: state.setNeedCheckVisualizer
		}))
	)

	useShowMusicPlayer(showMusicPlayer)

	useDefaultPlaylist()

	const toggleLaunch = useCallback(() => {
		if (isFirstLaunch) {
			setIsFirstLaunch(false)
		}

		if (ctrlIcon.current!.src.includes('pause')) {
			song.current!.pause()
			ctrlIcon.current!.src = '/abra-cv/icons/play.svg'
			setCoverShake(false)
		} else {
			song.current!.play()
			ctrlIcon.current!.src = '/abra-cv/icons/pause.svg'
			setCoverShake(true)
		}

		setNeedCheckVisualizer(true)
	}, [])

	const launchNextSong = useCallback(() => {
		if (isFirstLaunch) {
			setIsFirstLaunch(false)
		}

		setNeedNewRandomSong(true)

		setNeedCheckVisualizer(true)

		setCoverShake(true)
	}, [])

	const setCoverShake = useCallback((play: boolean) => {
		if (animationFrame.current) {
			cancelAnimationFrame(animationFrame.current) // Останавливаем предыдущую анимацию
			songImg.current!.style.transform = 'translate(-50%, -50%) scale(1)' // Сбрасываем масштаб до исходного
		}

		if (play) {
			let startTime: number | null = null

			const animate = (timestamp: number) => {
				if (!startTime) startTime = timestamp // Инициализация времени начала анимации
				const elapsedTime = timestamp - startTime

				// Генерация случайного значения для масштабирования
				const randomScale = Math.random() * 0.2 + 0.9 // Масштаб от 1 до 1.05

				// Применяем масштабирование
				songImg.current!.style.transform = `translate(-50%, -50%) scale(${randomScale})`

				// Повторяем анимацию каждые 100 мс
				if (elapsedTime < 100) {
					animationFrame.current = requestAnimationFrame(animate)
				} else {
					// После 100 мс начинаем новую итерацию
					startTime = null
					animationFrame.current = requestAnimationFrame(animate)
				}
			}

			// Запускаем анимацию
			animationFrame.current = requestAnimationFrame(animate)
		}
	}, [])

	// const setCoverShake = useCallback((play: boolean) => {
	// 	if (interval.current) {
	// 		clearInterval(interval.current)
	// 		songImg.current!.style.width = `100px`
	// 	}

	// 	if (play) {
	// 		interval.current = setInterval(() => {
	// 			songImg.current!.style.width = `${Math.random() * 5 + 100}px`
	// 		}, 100)
	// 	}
	// }, [])

	return (
		<div ref={player} className={styles.musicPlayer} data-class='music'>
			<div className={styles.playlistVolumeWrapper} data-class='music'>
				<PlaylistsButton />
				<Volume />
			</div>
			<Visualizer />
			<TrackInfo />
			<SongAudio
				launchNextSong={launchNextSong}
				setCoverShake={setCoverShake}
			/>
			<div className={styles.controlsWrapper} data-class='music'>
				<MusicProgress />
				<ControlButtons
					toggleLaunch={toggleLaunch}
					launchNextSong={launchNextSong}
				/>
			</div>
			<Playlists />
		</div>
	)
}

export default MusicPlayer
