import { useMemo, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/ui/loader/Loader'
import MusicPlayerHint from './components/ui/music-player-hint/MusicPlayerHint'
import MusicPlayer from './components/ui/music-player/MusicPlayer'
import MusicContextProvider from './components/ui/music-player/provider/MusicContextProvider'
import ShowPlayerButton from './components/ui/show-player-button/ShowPlayerButton'
import { useCloseMusicPlayer } from './hooks/useCloseMusicPlayer'
import { usePreloadFirstCarouselImage } from './hooks/usePreloadFirstCarouselImage'
import Router from './router/Router'

function App() {
	const [isLoading, setIsLoading] = useState(
		sessionStorage.getItem('loading') ? false : true
	)
	const [showMusicPlayer, setShowMusicPlayer] = useState(false)

	usePreloadFirstCarouselImage()

	useCloseMusicPlayer(setShowMusicPlayer)

	const router = useMemo(
		() => (
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		),
		[]
	)

	return (
		<>
			{isLoading ? (
				<Loader setIsLoading={setIsLoading} />
			) : (
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
			)}
		</>
	)
}

export default App
