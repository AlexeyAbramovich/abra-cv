import styles from './Stack.module.scss'

const Stack = ({
	projectName,
	technologies
}: {
	projectName: string
	technologies: string[]
}) => {
	return (
		<div className={styles.stack}>
			{technologies.map((tech) => (
				<div key={`${projectName}_technology_${tech}`}>
					<img
						src={`/icons/technologies/${tech.toLowerCase().split(' ').join('-')}.svg`}
						alt={tech}
					/>
					<p>{tech}</p>
				</div>
			))}
		</div>
	)
}

export default Stack
