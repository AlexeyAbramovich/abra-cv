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
	{ img: '/abra-cv/icons/relax.svg', title: 'Relax' },
	{ img: '/abra-cv/icons/russian.svg', title: 'Russian' },
	{ img: '/abra-cv/icons/rock.svg', title: 'Rock' },
	{ img: '/abra-cv/icons/rap.svg', title: 'Rap' },
	{ img: '/abra-cv/icons/beat.svg', title: 'Beat' },
	{ img: '/abra-cv/icons/energy.svg', title: 'AC/DC' }
]
