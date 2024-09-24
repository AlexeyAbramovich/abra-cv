import cn from 'clsx'
import { useEffect, useState } from 'react'
import styles from '../Loader.module.scss'

const LoaderProgress = () => {
	const [hideLoader, setHideLoader] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setHideLoader(false)
		}, 5000)
	}, [])

	return (
		<div>
			<span className={cn(hideLoader && 'none', styles.loader_progress)}></span>
		</div>
	)
}

export default LoaderProgress
