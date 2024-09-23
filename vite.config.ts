import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			$ui: '/src/components/ui/',
			$hooks: '/src/components/ui/music-player/hooks/'
		}
	}
})
