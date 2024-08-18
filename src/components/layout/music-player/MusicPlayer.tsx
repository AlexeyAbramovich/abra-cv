import { useEffect, useRef } from 'react'
import { useCheckVisualizer } from './hooks/useCheckVisualizer'
import { useDefaultPlaylist } from './hooks/useDefaultPlaylist'
import { useMusicContext } from './hooks/useMusicContext'
import { usePreparePlayerSong } from './hooks/usePreparePlayerSong'
import { useRandomSong } from './hooks/useRandomSong'
import { useVisualizer } from './hooks/useVisualizer'
import styles from './MusicPlayer.module.scss'
import { formatTime } from './utils/format-time.util'

const MusicPlayer = () => {
	const interval = useRef<number | null>(null)

	const {
		player,
		songImg,
		songName,
		songArtist,
		progress,
		song,
		ctrlBtn,
		ctrlIcon,
		prev,
		next,
		songCurrentTime,
		songEndTime,
		visualizer,
		isFirstLaunch,
		setIsFirstLaunch,
		setIsSongLoaded,
		setNeedNewRandomSong,
		setNeedCheckVisualizer
	} = useMusicContext()

	useDefaultPlaylist()

	useRandomSong()

	usePreparePlayerSong()

	useCheckVisualizer()

	useVisualizer()

	useEffect(() => {
		if (
			song.current &&
			progress.current &&
			ctrlIcon.current &&
			songCurrentTime.current &&
			songEndTime.current
		) {
			song.current.addEventListener('loadedmetadata', function () {
				progress.current!.max = `${song.current!.duration}`
				progress.current!.value = `${song.current!.currentTime}`
				songEndTime.current!.textContent = formatTime(song.current!.duration)
				songCurrentTime.current!.textContent = formatTime(
					song.current!.currentTime
				)
				setIsSongLoaded(true)
			})

			song.current.ontimeupdate = () => {
				progress.current!.value = `${song.current!.currentTime}`
				songCurrentTime.current!.textContent = formatTime(
					song.current!.currentTime
				)
			}

			song.current.onended = () => {
				launchNextSong()
			}

			song.current.onplay = () => {
				if (interval.current) {
					clearInterval(interval.current)
				}

				ctrlIcon.current!.src = '/src/assets/icons/pause.svg'
				setCoverShake()
			}

			song.current.onpause = () => {
				if (interval.current) {
					clearInterval(interval.current)
					songImg.current!.style.width = `100px`
				}

				ctrlIcon.current!.src = '/src/assets/icons/play.svg'
			}

			progress.current.onchange = () => {
				song.current!.currentTime = +progress.current!.value
			}
		}
	}, [song, progress, ctrlIcon, songCurrentTime, songEndTime])

	function toggleLaunch() {
		if (interval.current) {
			clearInterval(interval.current)
			songImg.current!.style.width = `100px`
		}

		if (ctrlIcon.current!.src.includes('pause')) {
			song.current!.pause()
			ctrlIcon.current!.src = '/src/assets/icons/play.svg'
		} else {
			song.current!.play()
			setCoverShake()
			ctrlIcon.current!.src = '/src/assets/icons/pause.svg'
		}

		setNeedCheckVisualizer(true)

		if (isFirstLaunch) {
			setIsFirstLaunch(false)
		}
	}

	function launchNextSong() {
		if (interval.current) {
			clearInterval(interval.current)
			songImg.current!.style.width = `100px`
		}

		setNeedNewRandomSong(true)

		setNeedCheckVisualizer(true)

		if (isFirstLaunch) {
			setIsFirstLaunch(false)
		}
		setCoverShake()
	}

	const setCoverShake = () => {
		interval.current = setInterval(() => {
			songImg.current!.style.width = `${Math.random() * 10 + 100}px`
		}, 100)
	}

	return (
		<div ref={player} className={styles.musicPlayer}>
			<div className={styles.playlistVolumeWrapper}>
				<button>
					<svg
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H21C21.4142 9.25 21.75 9.58579 21.75 10C21.75 10.4142 21.4142 10.75 21 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10ZM2.25 14C2.25 13.5858 2.58579 13.25 3 13.25H11C11.4142 13.25 11.75 13.5858 11.75 14C11.75 14.4142 11.4142 14.75 11 14.75H3C2.58579 14.75 2.25 14.4142 2.25 14ZM2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H11C11.4142 17.25 11.75 17.5858 11.75 18C11.75 18.4142 11.4142 18.75 11 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z'
							fill='#ff8800'
						/>
						<path
							d='M18.875 14.1184C20.5288 15.0733 21.3558 15.5507 21.4772 16.2395C21.5076 16.4118 21.5076 16.5882 21.4772 16.7605C21.3558 17.4493 20.5288 17.9267 18.875 18.8816C17.2212 19.8364 16.3942 20.3138 15.737 20.0746C15.5725 20.0148 15.4199 19.9266 15.2858 19.8141C14.75 19.3645 14.75 18.4097 14.75 16.5C14.75 14.5903 14.75 13.6355 15.2858 13.1859C15.4199 13.0734 15.5725 12.9852 15.737 12.9254C16.3942 12.6862 17.2212 13.1636 18.875 14.1184Z'
							fill='#ff8800'
						/>
					</svg>
				</button>
				<div className={styles.volumeWrapper}>
					<input className={styles.volume} type='range' />
				</div>
			</div>
			<div className={styles.coverWrapper}>
				<img
					ref={songImg}
					className={styles.songImg}
					src='/images/covers/sport/1.png'
				/>
				<div className={styles.box}>
					<div ref={visualizer} className={styles.visualizer}></div>
				</div>
			</div>
			<div className={styles.trackInfo}>
				<span ref={songName}></span>
				<span ref={songArtist}></span>
			</div>
			<audio ref={song}>
				<source id='audio-source' type='audio/mp3' />
			</audio>
			<div className={styles.controlsWrapper}>
				<div className={styles.progressWrapper}>
					<input
						ref={progress}
						className={styles.progress}
						type='range'
						// onChange={() => {
						// 	song.current!.currentTime = +progress.current!.value
						// }}
					/>
					<div className={styles.songTime}>
						<span ref={songCurrentTime}>00:00</span>
						<span ref={songEndTime}>00:00</span>
					</div>
				</div>
				<div className={styles.controls}>
					<button ref={prev} onClick={() => launchNextSong()}>
						<img
							className={styles.prev}
							src='/src/assets/icons/next-prev.svg'
							alt='previous song'
						/>
					</button>
					<button ref={ctrlBtn} onClick={() => toggleLaunch()}>
						<img
							ref={ctrlIcon}
							src='/src/assets/icons/play.svg'
							alt='play/pause song'
						/>
					</button>
					<button ref={next} onClick={() => launchNextSong()}>
						<img
							className={styles.next}
							src='/src/assets/icons/next-prev.svg'
							alt='next song'
						/>
					</button>
				</div>
			</div>
		</div>
	)
}

export default MusicPlayer
