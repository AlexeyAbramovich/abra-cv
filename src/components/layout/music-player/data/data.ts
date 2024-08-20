import { acDcPlaylist } from './playlists/acDcPlaylist'
import { beatPlaylist } from './playlists/beatPlaylist'
import { rapPlaylist } from './playlists/rapPlaylist'
import { relaxPlaylist } from './playlists/relaxPlaylist'
import { rockPlaylist } from './playlists/rockPlaylist'
import { russianPlaylist } from './playlists/russianPlaylist'

export const music = relaxPlaylist
	.concat(rockPlaylist)
	.concat(acDcPlaylist)
	.concat(russianPlaylist)
	.concat(rapPlaylist)
	.concat(beatPlaylist)

export const playlists = [
	{ img: '/src/assets/icons/relax.svg', title: 'Relax' },
	{ img: '/src/assets/icons/russian.svg', title: 'Russian' },
	{ img: '/src/assets/icons/rock.svg', title: 'Rock' },
	{ img: '/src/assets/icons/rap.svg', title: 'Rap' },
	{ img: '/src/assets/icons/beat.svg', title: 'Beat' },
	{ img: '/src/assets/icons/energy.svg', title: 'AC/DC' }
]
