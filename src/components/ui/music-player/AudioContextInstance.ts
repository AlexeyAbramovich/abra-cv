type Instance = {
	analyser: AnalyserNode
}

export const AudioContextInstance = (function () {
	let instance: Instance

	function createInstance(song: HTMLAudioElement) {
		const ctx = new AudioContext()
		const analyser = ctx.createAnalyser()
		const source = ctx.createMediaElementSource(song)
		source.connect(analyser)
		source.connect(ctx.destination)
		return {
			analyser
		}
	}
	return {
		getInstance: function (song: HTMLAudioElement) {
			if (!instance) {
				instance = createInstance(song)
			}

			return instance
		}
	}
})()
