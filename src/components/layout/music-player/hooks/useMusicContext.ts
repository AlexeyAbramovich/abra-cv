import { useContext } from 'react'
import { MusicContext } from '../provider/MusicContextProvider'

export const useMusicContext = () => useContext(MusicContext)
