import MusicPlayerHint from '$ui/music-player-hint/MusicPlayerHint'
import MusicPlayer from '$ui/music-player/MusicPlayer'
import MusicContextProvider from '$ui/music-player/provider/MusicContextProvider'
import ShowPlayerButton from '$ui/show-player-button/ShowPlayerButton'
import { useMemo, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useCloseMusicPlayer } from './hooks/useCloseMusicPlayer'
import { usePreloadFirstCarouselImage } from './hooks/usePreloadFirstCarouselImage'
import Router from './router/Router'

function App() {
	// const [isLoading, setIsLoading] = useState(
	// 	sessionStorage.getItem('loading') ? false : true
	// )
	const [showMusicPlayer, setShowMusicPlayer] = useState(false)

	usePreloadFirstCarouselImage()

	useCloseMusicPlayer(setShowMusicPlayer)

	const router = useMemo(
		() => (
			<BrowserRouter basename={import.meta.env.BASE_URL}>
				<Router />
			</BrowserRouter>
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
