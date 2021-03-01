import '@/core/style/index.css'
import installApi from '../apiService'

const env = import.meta.env.MODE
const isDev = env === 'development'

function devLog(...args) {
	if (isDev) {
		console.log(...args)
	}
}

function initApp() {
	window.$devLog = devLog
	installApi()
}

export default initApp
