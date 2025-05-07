import MusicPlayerHint from '$ui/music-player-hint/MusicPlayerHint'
import MusicPlayer from '$ui/music-player/MusicPlayer'
import MusicContextProvider from '$ui/music-player/provider/MusicContextProvider'
import ShowPlayerButton from '$ui/show-player-button/ShowPlayerButton'
import { useMemo, useState } from 'react'
import { HashRouter } from 'react-router-dom'
import { useCloseMusicPlayer } from './hooks/useCloseMusicPlayer'
import { usePrefetchFirstCarouselImage } from './hooks/usePreloadFirstCarouselImage'
import Router from './router/Router'

function App() {
	const [showMusicPlayer, setShowMusicPlayer] = useState(false)

	usePrefetchFirstCarouselImage()

	useCloseMusicPlayer(setShowMusicPlayer)

	const router = useMemo(
		() => (
			<HashRouter>
				<Router />
			</HashRouter>
		),
		[]
	)

	return (
		<>
			{router}

			<ShowPlayerButton
				onClick={() => {
					setShowMusicPlayer(true)
				}}
			/>

			<MusicPlayerHint />

			<MusicContextProvider>
				<MusicPlayer showMusicPlayer={showMusicPlayer} />
			</MusicContextProvider>
		</>
	)
}

export default App
