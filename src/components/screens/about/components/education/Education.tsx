import { Fragment } from 'react/jsx-runtime'
import { channels } from './channels'
import Helpers from './components/Helpers'
import YouTubeLink from './components/YouTubeLink'
import styles from './Education.module.scss'

const Education = () => {
	return (
		<section className={styles.education}>
			<h2>Как обучаюсь</h2>
			<p>
				Периодически{' '}
				<span>
					приезжал к Илье, чтобы обговорить свои успехи, скорректировать
					дальнейший путь обучения
				</span>
				. Таким образом вы сейчас видите на экране, плод моего последнего
				творения.
			</p>
			<p>
				Для обучения использую <span>в основном YouTube</span> для практики и
				теории, отдельно выделю такие каналы как{' '}
				{channels.map((channel) => (
					<Fragment key={channel.name}>
						<YouTubeLink link={channel.link} text={channel.name} />,{' '}
					</Fragment>
				))}
				у этих ребят я многому научился и учусь по сей день. Также в процессе
				обучения мне <span>нереально круто помогает ИИ Gemini</span> при работе
				с документацией или кодом.
			</p>
			<Helpers />
		</section>
	)
}

export default Education
