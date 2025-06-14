import styles from '../Intro.module.scss'
import DownloadButton from './DownloadButton'

const Summary = () => {
	return (
		<div className={styles.way_in_frontend}>
			<h2>Коротко обо мне</h2>
			<p>
				Я Frontend-разработчик с <span>3+ годами опыта</span> в создании
				масштабируемых веб-приложений с упором на <span>качество продукта</span>
				. Имею <span>глубокие знания</span> в <span>JavaScript/TypeScript</span>
				, <span>React и его экосистеме</span> и <span>Next.js</span>. Также{' '}
				<span>имею опыт в написании серверной части</span> при помощи Node.js и
				Nest.js, <span>тестировании</span> при помощи Jest/Cypress и{' '}
				<span>настройке CI/CD через Docker + GitHub Actions</span>. Умею
				работать <span>в сжатых сроках</span> и{' '}
				<span>адаптироваться под любые задачи и команду</span>.{' '}
				<span>Работал по обеим методологиям — и Scrum, и Kanban</span> — в
				разных командах, от <span>6</span> до <span>20</span> человек, на
				проекте. Готов брать на себя сложные задачи и вносить вклад в масштабные
				проекты.
			</p>
			<DownloadButton />
		</div>
	)
}

export default Summary
