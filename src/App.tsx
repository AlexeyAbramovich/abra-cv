import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MusicPlayer from './components/layout/music-player/MusicPlayer'
import MusicContextProvider from './components/layout/music-player/provider/MusicContextProvider'
import ShowPlayerButton from './components/layout/show-player-button/ShowPlayerButton'
import Loader from './components/ui/loader/Loader'
import Router from './router/Router'

function App() {
	const [isLoading, setIsLoading] = useState(false)
	const [showMusicPlayer, setShowMusicPlayer] = useState(false)

	const handleClick = (e: MouseEvent) => {
		if (e.target instanceof Element) {
			if (!e.target.closest('[data-class]')) {
				setShowMusicPlayer(false)
			}
		} else {
			setShowMusicPlayer(false)
		}
	}

	useEffect(() => {
		document.body.addEventListener('click', handleClick)
		return () => {
			document.body.removeEventListener('click', handleClick)
		}
	}, [])

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
					<MusicContextProvider>
						<MusicPlayer showMusicPlayer={showMusicPlayer} />
					</MusicContextProvider>
				</>
			)}
		</>
	)
}

export default App
