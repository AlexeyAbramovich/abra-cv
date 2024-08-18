import cn from 'clsx'
import styles from './Loader.module.scss'
import { useLoader } from './useLoader'

type Props = {
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Loader = ({ setIsLoading }: Props) => {
	const { warning, warningText, errorIcon, loaderProgress } =
		useLoader(setIsLoading)

	return (
		<article className={styles.loader}>
			<div className={styles.wrapper}>
				<img src='/src/assets/animated/react.gif' />

				<div ref={warning} className={cn(styles.warning, 'none')}>
					<img
						ref={errorIcon}
						src='/src/assets/icons/error.svg'
						alt='Error loading site'
					/>
					<span ref={warningText} className={styles.warningText}>
						Не удалось загрузить сайт. <br />
						Нет подключения к интернету.
					</span>
				</div>

				<div>
					<span
						ref={loaderProgress}
						className={cn(styles.loader_progress, 'none')}
					></span>
				</div>
			</div>
		</article>
	)
}

export default Loader
