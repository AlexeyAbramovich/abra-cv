import cn from 'clsx'
import styles from './Feedback.module.scss'

const Feedback = ({ type }: { type: 'mobile' | 'desktop' }) => {
	return (
		<p
			className={cn(
				styles.feedback,
				type === 'mobile' ? styles.feedback_mobile : styles.feedback_desktop
			)}
		>
			Буду благодарен за любой feedback или совет по этому сайту-резюме через
			форму или напрямую через социальные сети. Если вам понравился плеер, также
			буду рад, если поделитесь, какая песня или плейлист вам больше
			понравились. Уверен, что скоро увидимся с вами на следующем этапе
			собеседования😉
		</p>
	)
}

export default Feedback
