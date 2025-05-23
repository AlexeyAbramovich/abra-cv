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
	const { player, song, ctrlIcon } = useMusicContext()

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
		} else {
			song.current!.play()
			ctrlIcon.current!.src = '/abra-cv/icons/pause.svg'
		}

		setNeedCheckVisualizer(true)
	}, [])

	const launchNextSong = useCallback(() => {
		if (isFirstLaunch) {
			setIsFirstLaunch(false)
		}

		setNeedNewRandomSong(true)

		setNeedCheckVisualizer(true)
	}, [])

	return (
		<div ref={player} className={styles.musicPlayer} data-class='music'>
			<div className={styles.playlistVolumeWrapper} data-class='music'>
				<PlaylistsButton />
				<Volume />
			</div>
			<Visualizer />
			<TrackInfo />
			<SongAudio launchNextSong={launchNextSong} />
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
