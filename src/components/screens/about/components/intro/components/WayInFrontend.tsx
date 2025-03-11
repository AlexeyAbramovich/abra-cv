import styles from '../Intro.module.scss'
import DownloadButton from './DownloadButton'

const WayInFrontend = () => {
	return (
		<div className={styles.way_in_frontend}>
			<h2>Как я пришел во frontend?</h2>
			<p>
				Итак, поехали, расскажу немного о себе. Как я пришел во Frontend,
				спросите вы? Начиная <span>с декабря 2023 года</span>, я активно начал
				изучать Frontend направление. Началось всё с момента, когда я{' '}
				<span>познакомился с крутым парнем Ильёй из компании IT Territory</span>
				, который любезно пригласил меня к себе домой и показал, как выглядит
				реальная разработка на основе одного из своих проектов. Меня
				замотивировал сам процесс разработки и жизнь успешного программиста,
				поэтому решил для себя, что хочу так же.
			</p>
			<DownloadButton />
		</div>
	)
}

export default WayInFrontend
