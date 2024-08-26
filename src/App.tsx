import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MusicPlayerHint from './components/layout/music-player-hint/MusicPlayerHint'
import MusicPlayer from './components/layout/music-player/MusicPlayer'
import MusicContextProvider from './components/layout/music-player/provider/MusicContextProvider'
import ShowPlayerButton from './components/layout/show-player-button/ShowPlayerButton'
import Loader from './components/ui/loader/Loader'
import { useCloseMusicPlayer } from './hooks/useCloseMusicPlayer'
import { useMusicPlayerHint } from './hooks/useMusicPlayerHint'
import Router from './router/Router'

function App() {
	const [isLoading, setIsLoading] = useState(false)
	const [showMusicPlayer, setShowMusicPlayer] = useState(false)
	const { musicHintRef } = useMusicPlayerHint()

	useCloseMusicPlayer(setShowMusicPlayer)

	return (
		<>
			{isLoading ? (
				<Loader setIsLoading={setIsLoading} />
			) : (
				<>
					<BrowserRouter>
						<Router />
					</BrowserRouter>

					<ShowPlayerButton
						onClick={() => {
							setShowMusicPlayer(true)
						}}
					/>

					<MusicPlayerHint reference={musicHintRef} />

					<MusicContextProvider>
						<MusicPlayer showMusicPlayer={showMusicPlayer} />
					</MusicContextProvider>
				</>
			)}
		</>
	)
}

export default App
