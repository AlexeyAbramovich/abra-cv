import { AnimatePresence } from 'framer-motion'
import { lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import NotFound from '../components/screens/not-found/NotFound'
import { useResetScroll } from '../hooks/useResetScroll'
import { useUpdateDocumentTitle } from '../hooks/useUpdateDocumentTitle'

const HomePage = lazy(() => import('../components/screens/home/Home'))
const AboutPage = lazy(() => import('../components/screens/about/About'))
const ProjectsPage = lazy(
	() => import('../components/screens/projects/Projects')
)
const ContactsPage = lazy(
	() => import('../components/screens/contacts/Contacts')
)

const AnimatedRoutes = () => {
	const path = useLocation()

	useResetScroll(path)

	useUpdateDocumentTitle(path)

	return (
		<AnimatePresence>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/projects' element={<ProjectsPage />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes
