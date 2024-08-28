import { createContext, PropsWithChildren } from 'react'
import { useControllers } from '../hooks/useControllers'
import { useStore } from '../hooks/useStore'
import { Properties } from '../types'

export const MusicContext = createContext<Properties>({} as Properties)

const MusicContextProvider = ({ children }: PropsWithChildren) => {
	const controllers = useControllers()
	const store = useStore()
	return (
		<MusicContext.Provider value={{ ...controllers, ...store }}>
			{children}
		</MusicContext.Provider>
	)
}

export default MusicContextProvider
