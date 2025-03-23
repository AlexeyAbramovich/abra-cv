import styles from './Gratitude.module.scss'
import InstagramLink from './components/InstagramLink'

const Gratitude = () => {
	return (
		<section className={styles.gratitude}>
			<h2>Благодарность</h2>
			<div className={styles.borderAnimationWrapper}>
				<div className={styles.wrapper}>
					<div className={styles.avatar}>
						<div className={styles.animationWrapper}>
							<img
								src='/abra-cv/images/ilya.webp'
								alt='Photo of Ilya'
								loading='lazy'
							/>
						</div>
						<span>Илья</span>
					</div>
					<p>
						Пользуясь случаем, хочу выразить благодарность Илье за помощь в
						обучении и мотивацию!
					</p>
					<InstagramLink />
				</div>
			</div>
		</section>
	)
}

export default Gratitude
