import { useMusicContext } from '$hooks/useMusicContext'
import { useMusicStore } from '$hooks/useMusicStore'
import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { AudioContextInstance } from '../../../AudioContextInstance'
import styles from '../Visualizer.module.scss'

export const useVisualizer = () => {
	const { visualizer, song } = useMusicContext()

	const { currentSong, visualizerWasSet } = useMusicStore(
		useShallow((state) => ({
			currentSong: state.currentSong,
			visualizerWasSet: state.visualizerWasSet
		}))
	)

	useEffect(() => {
		if (visualizer && song && visualizerWasSet && currentSong) {
			const { analyser } = AudioContextInstance.getInstance(song.current!)

			// количество элементов в визуализаторе, которые буду расположены вокруг обложки трека
			analyser.fftSize = 64
			const bufferLength = analyser.frequencyBinCount

			let dataArray = new Uint8Array(bufferLength)
			let elements = []
			for (let i = 0; i < bufferLength; i++) {
				const element = document.createElement('span')
				element.classList.add(styles.element)
				elements.push(element)
				visualizer.current!.appendChild(element)
			}

			const clamp = (num: number, min: number, max: number) => {
				if (num >= max) return max
				if (num <= min) return min
				return num
			}

			const update = () => {
				requestAnimationFrame(update)
				analyser.getByteFrequencyData(dataArray)
				for (let i = 0; i < bufferLength; i++) {
					let item = dataArray[i]

					item = item > 120 ? item / 10 : item / 2

					elements[i].style.transform = `rotateZ(${
						i * (360 / bufferLength)
					}deg) translate(-50%, ${clamp(item, 10, 20)}px)`
					if (currentSong) {
						elements[i].style.borderTopColor = currentSong.visualizerColor
					}
				}
			}
			update()

			return () => {
				// удаляем все созданные элементы визуализатора
				for (let el of elements) {
					el.remove()
				}
			}
		}
	}, [visualizerWasSet, currentSong])
}
