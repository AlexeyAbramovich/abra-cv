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
	{ img: '/icons/relax.svg', title: 'Relax' },
	{ img: '/icons/russian.svg', title: 'Russian' },
	{ img: '/icons/rock.svg', title: 'Rock' },
	{ img: '/icons/rap.svg', title: 'Rap' },
	{ img: '/icons/beat.svg', title: 'Beat' },
	{ img: '/icons/energy.svg', title: 'AC/DC' }
]
