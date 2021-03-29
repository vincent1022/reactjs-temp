const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const dotenv = require('dotenv')

// 環境注入
console.log(`[START] set env`)
for (const file of [`.env`, `.env.${process.env.APP_ENV}`]) {
	try {
		const f = fs.readFileSync(file)
		const envConfig = dotenv.parse(f)
		for (const k in envConfig) {
			process.env[k] = envConfig[k]
		}
	} catch (err) {}
}
console.log(`[END] set env`)

// jsl 依賴檢測
;(async () => {
	if (process.env.NODE_ENV === 'production' && process.env.USE_JSL === 'true') {
		console.log('[START] check jsl exists')
		try {
			fs.readdirSync(path.resolve(__dirname, 'jsl'))
			if (process.env.LASTEST_JSL === 'true') {
				console.log('upgrade jsl')
				execSync('npm run upgrade:jsl')
			}
		} catch {
			console.log('clone jsl')
			execSync('npm run add:jsl')
		}
		console.log('[END] check jsl exists')
	}
})()
