import Loading from '$ui/loading/Loading'
import { Suspense } from 'react'
import Header from '../components/layout/header/Header'
import AnimatedRoutes from './AnimatedRoutes'

const Router = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<Loading />}>
				<AnimatedRoutes />
			</Suspense>
		</>
	)
}

export default Router
