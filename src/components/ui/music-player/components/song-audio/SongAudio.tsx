import { useMusicContext } from '../../hooks/useMusicContext'
import { usePreparePlayerSong } from './hooks/usePreparePlayerSong'
import { useRandomSong } from './hooks/useRandomSong'
import { useSongAudioListeners } from './hooks/useSongAudioListeners'
import { useStopUpdatingProgressWhileOnChange } from './hooks/useStopUpdatingProgressWhileOnChange'

type Props = {
	launchNextSong: () => void
	setCoverShake: (play: boolean) => void
}

const SongAudio = ({ launchNextSong, setCoverShake }: Props) => {
	const { song } = useMusicContext()

	useSongAudioListeners(launchNextSong, setCoverShake)

	useStopUpdatingProgressWhileOnChange()

	useRandomSong()

	usePreparePlayerSong()

	return (
		<audio ref={song} data-class='music'>
			<source type='audio/mp3' data-class='music' />
		</audio>
	)
}

export default SongAudio
