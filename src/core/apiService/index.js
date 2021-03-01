import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

axios.interceptors.request.use(
	config => {
		return config
	},
	error => {
		return Promise.resolve(error)
	},
)

axios.interceptors.response.use(
	response => {
		return response
	},
	error => {
		const res = error.response
		return Promise.resolve(res)
	},
)

const apis = {
	login: params => axios.post('login', params)
}

function installApi() {
	window.$apis = apis
}

export default installApi
