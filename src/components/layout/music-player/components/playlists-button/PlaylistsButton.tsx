import { useMusicContext } from '../../hooks/useMusicContext'
import PlaylistsSvg from './PlaylistsSvg'

const PlaylistsButton = () => {
	const { showPlaylists, setShowPlaylists } = useMusicContext()

	return (
		<button
			aria-label='Show or hide playlists'
			type='button'
			data-class='music'
			onClick={() => {
				setShowPlaylists(!showPlaylists)
			}}
		>
			<PlaylistsSvg />
		</button>
	)
}

export default PlaylistsButton
