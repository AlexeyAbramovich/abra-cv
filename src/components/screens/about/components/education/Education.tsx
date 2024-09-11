import { channels } from './channels'
import Helpers from './components/Helpers'
import YouTubeLink from './components/YouTubeLink'
import styles from './Education.module.scss'

const Education = () => {
	return (
		<section className={styles.education}>
			<h2 className={styles.orange}>Как обучаюсь</h2>
			<p>
				Периодически{' '}
				<span className={styles.orange}>
					приезжал к Илье, чтобы обговорить свои успехи, скорректировать
					дальнейший путь обучения
				</span>
				. Таким образом вы сейчас видите на экране, плод моего последнего
				творения.
			</p>
			<p>
				Для обучения использую{' '}
				<span className={styles.orange}>в основном YouTube</span> для практики и
				теории, отдельно выделю такие каналы как{' '}
				{channels.map((channel) => (
					<>
						<YouTubeLink link={channel.link} text={channel.name} />,{' '}
					</>
				))}
				у этих ребят я многому научился и учусь по сей день. Также в процессе
				обучения мне{' '}
				<span className={styles.orange}>
					нереально круто помогает ИИ Gemini
				</span>{' '}
				при работе с документацией или кодом.
			</p>
			<Helpers />
		</section>
	)
}

export default Education
