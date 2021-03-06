const env = import.meta.env.MODE
const isDev = env === 'development'

function devLog(...args) {
	if (isDev) {
		console.log(...args)
	}
}

export default devLog
