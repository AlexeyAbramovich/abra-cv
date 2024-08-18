import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MusicPlayer from './components/layout/music-player/MusicPlayer'
import MusicContextProvider from './components/layout/music-player/provider/MusicContextProvider'
import Loader from './components/ui/loader/Loader'
import Router from './router/Router'

function App() {
	const [isLoading, setIsLoading] = useState(false)

	return (
		<>
			{isLoading ? (
				<Loader setIsLoading={setIsLoading} />
			) : (
				<>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
					<MusicContextProvider>
						<MusicPlayer />
					</MusicContextProvider>
				</>
			)}
		</>
	)
}

export default App
