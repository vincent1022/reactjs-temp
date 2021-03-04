import '@/core/style/index.css'
import installApi from '../apiService'
import devLog from '@/lib/devLog'

function initApp() {
	window.$devLog = devLog
	installApi()
}

export default initApp
