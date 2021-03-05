import '@/core/style/index.css'
import installApi from '../apiService'
import { devLog } from '@/lib'

function initApp() {
	window.$devLog = devLog
	installApi()
}

export default initApp
