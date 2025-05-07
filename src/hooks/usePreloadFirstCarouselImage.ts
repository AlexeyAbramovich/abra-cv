import { useLayoutEffect } from 'react'
import { projects } from '../components/screens/projects/data/projects'

export const usePrefetchFirstCarouselImage = () => {
	useLayoutEffect(() => {
		if (!document.head.querySelector('[data-link]')) {
			const links: HTMLLinkElement[] = []
			projects.forEach((project) => {
				const link = document.createElement('link')
				link.rel = 'prefetch'
				link.as = 'image'
				link.dataset.link = 'projects'
				link.href = project.preview[0]
				document.head.appendChild(link)
				links.push(link)
			})
		}
	}, [])
}
