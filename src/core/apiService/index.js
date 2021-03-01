import axios from 'axios'

// axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

function installApi() {
	window.$api = axios
}

export default installApi
