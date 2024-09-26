import { AnimatePresence } from 'framer-motion'
import { lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useResetScroll } from '../hooks/useResetScroll'
import { useUpdateDocumentTitle } from '../hooks/useUpdateDocumentTitle'

const About = lazy(() => import('../components/screens/about/About'))
const Contacts = lazy(() => import('../components/screens/contacts/Contacts'))
const Home = lazy(() => import('../components/screens/home/Home'))
const NotFound = lazy(() => import('../components/screens/not-found/NotFound'))
const Projects = lazy(() => import('../components/screens/projects/Projects'))

const AnimatedRoutes = () => {
	const path = useLocation()

	useResetScroll(path)

	useUpdateDocumentTitle(path)

	return (
		<AnimatePresence>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes
