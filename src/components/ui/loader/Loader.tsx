import LoaderProgress from './components/LoaderProgress'
import Warning from './components/warning/Warning'
import styles from './Loader.module.scss'
import { useLoader } from './useLoader'

type Props = {
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Loader = ({ setIsLoading }: Props) => {
	const error = useLoader(setIsLoading)

	return (
		<article className={styles.loader}>
			<div className={styles.wrapper}>
				<img src='/animated/react.gif' alt='Loading icon' />
				{error && <Warning />}
				{error && <LoaderProgress />}
			</div>
		</article>
	)
}

export default Loader
