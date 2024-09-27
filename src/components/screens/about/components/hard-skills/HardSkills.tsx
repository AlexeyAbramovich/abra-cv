import styles from './HardSkills.module.scss'

const HardSkills = ({ skills, title }: { skills: string[]; title: string }) => {
	return (
		<section className={styles.hard_skills}>
			<h2>{title}</h2>
			<div className={styles.technologies}>
				{skills.map((technology) => (
					<div key={technology} className={styles.technology}>
						<img
							src={`/abra-cv/icons/technologies/${technology.toLowerCase().split(' ').join('-')}.svg`}
							alt={`${technology} icon`}
							loading='lazy'
						/>
						<span>{technology}</span>
					</div>
				))}
			</div>
		</section>
	)
}

export default HardSkills
