import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from '../components/screens/about/About'
import Contacts from '../components/screens/contacts/Contacts'
import Home from '../components/screens/home/Home'
import NotFound from '../components/screens/not-found/NotFound'
import Projects from '../components/screens/projects/Projects'
import { useResetScroll } from '../hooks/useResetScroll'
import { useUpdateDocumentTitle } from '../hooks/useUpdateDocumentTitle'

const AnimatedRoutes = () => {
	const location = useLocation()

	useResetScroll(location)

	useUpdateDocumentTitle(location)

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
