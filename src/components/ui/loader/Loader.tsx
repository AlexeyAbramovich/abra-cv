import styles from './Loader.module.scss'

const Loader = () => {
	return (
		<div className={styles.loader}>
			<img src='/abra-cv/animated/react.gif' />
			<span className={styles.loader_text}></span>
		</div>
	)
}

export default Loader
