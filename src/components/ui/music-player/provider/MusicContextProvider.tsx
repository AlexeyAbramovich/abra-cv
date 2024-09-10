import { createContext, PropsWithChildren } from 'react'
import { useControllers } from '../hooks/useControllers'
import { Controllers } from '../types'

export const MusicContext = createContext<Controllers>({} as Controllers)

const MusicContextProvider = ({ children }: PropsWithChildren) => {
	const controllers = useControllers()
	return (
		<MusicContext.Provider value={{ ...controllers }}>
			{children}
		</MusicContext.Provider>
	)
}

export default MusicContextProvider
