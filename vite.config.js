import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

const envFiles = [`.env`, `.env.${process.env.APP_CONFIG}`]

for (const file of envFiles) {
	try {
		const f = fs.readFileSync(file)
		const envConfig = dotenv.parse(f)
		for (const k in envConfig) {
			process.env[k] = envConfig[k]
		}
	} catch (err) {}
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh()],
	esbuild: {
		jsxInject: `import React from 'react'`,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			jsl: path.resolve(__dirname, 'jsl/src/js/lib'),
			'jsl-react': path.resolve(__dirname, 'jsl/src/js/react'),
		},
	},
	server: {
		port: process.env.VITE_PORT,
		proxy: {
			[process.env.VITE_API_BASE_URL]: {
				target: process.env.VITE_API_URL,
				changeOrigin: true,
			},
			// [process.env.VITE_WS_BASE_URL]: {
			// 	target: process.env.VITE_API_URL,
			// 	changeOrigin: true,
			// 	// rewrite: path => path.replace(/^\/ws/, '')
			// }
		},
	},
})
