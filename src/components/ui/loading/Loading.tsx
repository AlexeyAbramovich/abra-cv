import styles from './Loading.module.scss'

const Loading = () => {
	return (
		<div className={styles.loading}>
			<img src='/animated/react.gif' alt='Loading...' />
			<span>Загрузка...</span>
		</div>
	)
}

export default Loading
