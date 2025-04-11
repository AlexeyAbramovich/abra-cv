import { memo } from 'react'
import { useMusicContext } from '../../hooks/useMusicContext'
import { usePreparePlayerSong } from './hooks/usePreparePlayerSong'
import { useRandomSong } from './hooks/useRandomSong'
import { useSongAudioListeners } from './hooks/useSongAudioListeners'
import { useStopUpdatingProgressWhileOnChange } from './hooks/useStopUpdatingProgressWhileOnChange'

type Props = {
	launchNextSong: () => void
}

const SongAudio = memo(function SongAudio({ launchNextSong }: Props) {
	const { song } = useMusicContext()

	useSongAudioListeners(launchNextSong)

	useStopUpdatingProgressWhileOnChange()

	useRandomSong()

	usePreparePlayerSong()

	return (
		<audio ref={song} data-class='music'>
			<source type='audio/mp3' data-class='music' />
		</audio>
	)
})

export default SongAudio
