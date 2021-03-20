const path = require('path')

// 給 webstorm 抓取 vite alias
module.exports = {
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			jsl: path.resolve(__dirname, 'jsl/src/js/lib'),
			'jsl-react': path.resolve(__dirname, 'jsl/src/js/react'),
		},
	},
}
