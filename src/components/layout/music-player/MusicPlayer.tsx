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
import { useShowMusicPlayer } from './hooks/useShowMusicPlayer'
import styles from './MusicPlayer.module.scss'

const MusicPlayer = ({ showMusicPlayer }: { showMusicPlayer: boolean }) => {
	const {
		player,
		songImg,
		song,
		ctrlIcon,
		isFirstLaunch,
		setIsFirstLaunch,
		setNeedNewRandomSong,
		setNeedCheckVisualizer,
		showPlaylists,
		interval
	} = useMusicContext()

	useShowMusicPlayer(showMusicPlayer)

	useDefaultPlaylist()

	function toggleLaunch() {
		if (isFirstLaunch) {
			setIsFirstLaunch(false)
		}

		if (ctrlIcon.current!.src.includes('pause')) {
			song.current!.pause()
			ctrlIcon.current!.src = '/src/assets/icons/play.svg'
			setCoverShake(false)
		} else {
			song.current!.play()
			ctrlIcon.current!.src = '/src/assets/icons/pause.svg'
			setCoverShake(true)
		}

		setNeedCheckVisualizer(true)
	}

	function launchNextSong() {
		if (isFirstLaunch) {
			setIsFirstLaunch(false)
		}

		setNeedNewRandomSong(true)

		setNeedCheckVisualizer(true)

		setCoverShake(true)
	}

	const setCoverShake = (play: boolean) => {
		if (interval.current) {
			clearInterval(interval.current)
			songImg.current!.style.width = `100px`
		}

		if (play) {
			interval.current = setInterval(() => {
				songImg.current!.style.width = `${Math.random() * 5 + 100}px`
			}, 100)
		}
	}

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
			{showPlaylists && <Playlists />}
		</div>
	)
}

export default MusicPlayer
