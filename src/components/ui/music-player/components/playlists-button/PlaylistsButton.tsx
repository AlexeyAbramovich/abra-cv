import { useShallow } from 'zustand/react/shallow'
import { useMusicStore } from '../../hooks/useMusicStore'
import PlaylistsSvg from './PlaylistsSvg'

const PlaylistsButton = () => {
	const { showPlaylists, setShowPlaylists } = useMusicStore(
		useShallow((state) => ({
			showPlaylists: state.showPlaylists,
			setShowPlaylists: state.setShowPlaylists
		}))
	)

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
