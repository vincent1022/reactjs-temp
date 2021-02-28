import '@/core/style/index.css'

const env = import.meta.env.MODE
const isDev = env === 'development'

function devLog(...args) {
	if (isDev) {
		console.log(...args)
	}
}

function initApp() {
	window.$devLog = devLog
}

export default initApp
