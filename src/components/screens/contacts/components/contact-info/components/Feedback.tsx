import { TypeAnimation } from 'react-type-animation'
import { CURSOR_CLASS_NAME } from '../../../../home/components/welcome-text/WelcomeText'
import styles from '../ContactsInfo.module.scss'

const Feedback = () => {
	return (
		<div className={styles.feedback}>
			<TypeAnimation
				className={CURSOR_CLASS_NAME}
				sequence={[
					'Буду благодарен за любой feedback или совет по этому сайту-резюме через форму или напрямую через социальные сети. Если вам понравился плеер, также буду рад, если поделитесь, какая песня или плейлист вам больше понравились. Уверен, что скоро увидимся с вами на следующем этапе собеседования😉',
					2000,
					(el) => el?.classList.remove(CURSOR_CLASS_NAME) // remove cursor after 2s
				]}
				speed={70}
				wrapper='span'
				cursor={true}
			/>
		</div>
	)
}

export default Feedback
