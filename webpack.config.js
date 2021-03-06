const path = require('path')

// 給 webstorm 抓取 vite alias
module.exports = {
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@baseLib': path.resolve(__dirname, 'src/lib/@base'),
			'@baseHooks': path.resolve(__dirname, 'src/hooks/@base'),
		},
	},
}
