import '@/core/style/index.css'
import installApi from '../apiService'
import { devLog } from '@baseLib'

function initApp() {
	window.$devLog = devLog
	installApi()
}

export default initApp
