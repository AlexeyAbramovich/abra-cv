import styles from './MusicPlayerHint.module.scss'

type Props = {
	reference: React.MutableRefObject<HTMLDivElement | null>
}

const MusicPlayerHint = ({ reference }: Props) => {
	return (
		<div ref={reference} className={styles.musicPlayerHint + ' none'}>
			<span />
			<span>
				Дорогой Гость, для вашего же удобства, предлагаю на фоне включить этот
				замечательный плеер с музыкой, надеюсь вы оцените😉
			</span>
			<img src='/icons/arrow-right.svg' />
		</div>
	)
}

export default MusicPlayerHint
