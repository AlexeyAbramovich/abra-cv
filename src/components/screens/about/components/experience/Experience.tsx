import Certificates from './Certificates'
import styles from './Experience.module.scss'

const Experience = () => {
	return (
		<section className={styles.experience}>
			<h2>Мой предыдущий опыт</h2>
			<p>
				У меня и раньше был опыт в разработке, но больше как хобби. В 2021{' '}
				<span>закончил курс по Android-разработке</span>, В 2022{' '}
				<span>закончил курс по QA тестированию</span>, больше как для общего
				развития. В 2023 году{' '}
				<span>закончил курс по Python Backend разработке на Django</span>. После
				знакомства с Ильёй - понял, что пора серьёзно изучить что-то одно и
				стать там экспертом. Он предложил мне изучить HTML, CSS, JS, React и
				весь остальной стек, необходимый для современного Frontend разработчика.
				Тут я принял для себя решение - все погнали, так и начался мой процесс
				обучения.
			</p>
			<Certificates />
		</section>
	)
}

export default Experience
