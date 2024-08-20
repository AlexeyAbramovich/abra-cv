import { useEffect, useRef, useState } from 'react'
import Playlists from './components/playlists/Playlists'
import { useCheckVisualizer } from './hooks/useCheckVisualizer'
import { useDefaultPlaylist } from './hooks/useDefaultPlaylist'
import { useMusicContext } from './hooks/useMusicContext'
import { usePreparePlayerSong } from './hooks/usePreparePlayerSong'
import { useRandomSong } from './hooks/useRandomSong'
import { useVisualizer } from './hooks/useVisualizer'
import styles from './MusicPlayer.module.scss'
import { formatTime } from './utils/format-time.util'

type Props = {
	showMusicPlayer: boolean
}

const MusicPlayer = ({ showMusicPlayer }: Props) => {
	const [showPlaylists, setShowPlaylists] = useState(false)
	const interval = useRef<number | null>(null)

	const {
		player,
		volume,
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

	useEffect(() => {
		if (player.current) {
			if (showMusicPlayer) {
				player.current.style.opacity = '1'
				player.current.style.zIndex = '1'
			} else {
				player.current.style.opacity = '0'
				player.current.style.zIndex = '-1'
			}
		}
	}, [player, showMusicPlayer])

	useDefaultPlaylist()

	useRandomSong()

	usePreparePlayerSong()

	useCheckVisualizer()

	useVisualizer()

	useEffect(() => {
		if (
			player.current &&
			song.current &&
			progress.current &&
			volume.current &&
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

			volume.current.onchange = () => {
				song.current!.volume = +volume.current!.value / 100
			}
			song.current.volume = 0.5
		}
	}, [
		player.current,
		song.current,
		progress.current,
		volume.current,
		ctrlIcon.current,
		songCurrentTime.current,
		songEndTime.current
	])

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
			songImg.current!.style.width = `${Math.random() * 5 + 100}px`
		}, 100)
	}

	return (
		<div ref={player} className={styles.musicPlayer} data-class='music'>
			<div className={styles.playlistVolumeWrapper} data-class='music'>
				<button
					type='button'
					data-class='music'
					onClick={() => {
						setShowPlaylists(!showPlaylists)
					}}
				>
					<svg
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						data-class='music'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H21C21.4142 9.25 21.75 9.58579 21.75 10C21.75 10.4142 21.4142 10.75 21 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10ZM2.25 14C2.25 13.5858 2.58579 13.25 3 13.25H11C11.4142 13.25 11.75 13.5858 11.75 14C11.75 14.4142 11.4142 14.75 11 14.75H3C2.58579 14.75 2.25 14.4142 2.25 14ZM2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H11C11.4142 17.25 11.75 17.5858 11.75 18C11.75 18.4142 11.4142 18.75 11 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z'
							fill='#ff8800'
						/>
						<path
							d='M18.875 14.1184C20.5288 15.0733 21.3558 15.5507 21.4772 16.2395C21.5076 16.4118 21.5076 16.5882 21.4772 16.7605C21.3558 17.4493 20.5288 17.9267 18.875 18.8816C17.2212 19.8364 16.3942 20.3138 15.737 20.0746C15.5725 20.0148 15.4199 19.9266 15.2858 19.8141C14.75 19.3645 14.75 18.4097 14.75 16.5C14.75 14.5903 14.75 13.6355 15.2858 13.1859C15.4199 13.0734 15.5725 12.9852 15.737 12.9254C16.3942 12.6862 17.2212 13.1636 18.875 14.1184Z'
							fill='#ff8800'
						/>
					</svg>
				</button>
				<div className={styles.volumeWrapper} data-class='music'>
					<img src='/src/assets/icons/volume.svg' data-class='music' />
					<input
						ref={volume}
						className={styles.volume}
						type='range'
						min={0}
						max={100}
						data-class='music'
					/>
				</div>
			</div>
			<div className={styles.coverWrapper} data-class='music'>
				<img
					ref={songImg}
					className={styles.songImg}
					src='/images/covers/sport/1.png'
					data-class='music'
				/>
				<div className={styles.box} data-class='music'>
					<div
						ref={visualizer}
						className={styles.visualizer}
						data-class='music'
					></div>
				</div>
			</div>
			<div className={styles.trackInfo} data-class='music'>
				<span ref={songName} data-class='music'></span>
				<span ref={songArtist} data-class='music'></span>
			</div>
			<audio ref={song} data-class='music'>
				<source type='audio/mp3' data-class='music' />
			</audio>
			<div className={styles.controlsWrapper} data-class='music'>
				<div className={styles.progressWrapper} data-class='music'>
					<input
						ref={progress}
						className={styles.progress}
						type='range'
						data-class='music'
					/>
					<div className={styles.songTime} data-class='music'>
						<span ref={songCurrentTime} data-class='music'>
							00:00
						</span>
						<span ref={songEndTime} data-class='music'>
							00:00
						</span>
					</div>
				</div>
				<div className={styles.controls} data-class='music'>
					<button
						type='button'
						ref={prev}
						onClick={(e) => {
							e.stopPropagation()
							launchNextSong()
						}}
						data-class='music'
					>
						<img
							className={styles.prev}
							src='/src/assets/icons/next-prev.svg'
							alt='previous song'
							data-class='music'
						/>
					</button>
					<button
						type='button'
						ref={ctrlBtn}
						onClick={(e) => {
							e.stopPropagation()
							toggleLaunch()
						}}
						data-class='music'
					>
						<img
							ref={ctrlIcon}
							src='/src/assets/icons/play.svg'
							alt='play/pause song'
							data-class='music'
						/>
					</button>
					<button
						type='button'
						ref={next}
						onClick={(e) => {
							e.stopPropagation()
							launchNextSong()
						}}
						data-class='music'
					>
						<img
							className={styles.next}
							src='/src/assets/icons/next-prev.svg'
							alt='next song'
							data-class='music'
						/>
					</button>
				</div>
			</div>
			{showPlaylists && <Playlists />}
		</div>
	)
}

export default MusicPlayer
