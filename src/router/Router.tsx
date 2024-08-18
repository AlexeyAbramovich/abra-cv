import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from '../components/layout/header/Header'
import About from '../components/screens/about/About'
import Contacts from '../components/screens/contacts/Contacts'
import Home from '../components/screens/home/Home'
import Projects from '../components/screens/projects/Projects'

const Router = () => {
	const path = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [path])

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contacts' element={<Contacts />} />
			</Routes>
		</>
	)
}

export default Router
