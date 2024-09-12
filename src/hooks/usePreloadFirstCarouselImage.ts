import { useEffect } from 'react'
import { projects } from '../components/screens/projects/data/projects'

export const usePreloadFirstCarouselImage = () => {
	useEffect(() => {
		const links: HTMLLinkElement[] = []
		projects.forEach((project) => {
			const link = document.createElement('link')
			link.rel = 'preload'
			link.as = 'image'
			link.href = project.preview[0]
			document.head.appendChild(link)
			links.push(link)
		})
		return () => {
			links.forEach((l) => {
				document.head.removeChild(l)
			})
		}
	}, [])
}
