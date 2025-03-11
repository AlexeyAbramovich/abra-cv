import Development from './Development'
import styles from './Goals.module.scss'

const Goals = () => {
	return (
		<section className={styles.goals}>
			<h2>Мои цели</h2>
			<p>
				Моей целью является{' '}
				<span>
					наращивание экспертизы в области frontend с последующим изучением
					backend
				</span>
				, чтобы <span>стать полноценным fullstack разработчиком</span>.
			</p>
			<div className={styles.illustration}>
				<Development dev='Frontend' />
				<img
					className={styles.sign}
					src='/abra-cv/icons/arrow-right-long.svg'
					alt=''
					loading='lazy'
				/>
				<div className={styles.fullstack_wrapper}>
					<h3>Fullstack developer</h3>
					<div className={styles.fullstack}>
						<Development dev='Frontend' />
						<img
							className={styles.sign}
							src='/abra-cv/icons/plus.svg'
							alt=''
							loading='lazy'
						/>
						<Development dev='Backend' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Goals
