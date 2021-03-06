const sec = 1000
const min = sec * 60
const hour = min * 60
const day = hour * 24
const yyyyMMdd = 'yyyy-MM-dd'
const yyyyMMddHHmmss = yyyyMMdd + 'HH:mm:ss'

const newStartDate = afterFormat =>
	new Date(format(afterFormat, yyyyMMdd) + ' 00:00:00')

const newEndDate = afterFormat =>
	new Date(format(afterFormat, yyyyMMdd) + ' 23:59:59')

const recentDateResult = (increaseDay, format, isStart) => {
	const date = new Date()
	const time = date.getTime()
	const compileDate = new Date(time + increaseDay)
	const result = isStart ? newStartDate(compileDate) : newEndDate(compileDate)
	return format === '' ? result : format(result, format)
}

const weekResult = (increaseDay = 0, format) => {
	const date = new Date()
	const time = date.getTime()
	const currentDay = date.getDay()
	const minusTime = day * (currentDay - 1 + increaseDay)
	const start = newStartDate(new Date(time - minusTime))
	const end = newEndDate(new Date(time - minusTime + day * 6))
	const result = [start, end]
	return format === '' ? result : result.map(e => format(e, format))
}

const monthResult = (isLast, format) => {
	const date = new Date()
	let year = date.getFullYear()
	let month = date.getMonth() + 1
	if (isLast) {
		month === 1 ? ((month = 12), year--) : (month = month - 1)
	}
	const padMonth = String(month).padStart(2, '0')
	const start = new Date(`${year}-${padMonth}-01 00:00:00`)
	let end = ''
	let lastDate = 31
	if (month === 2) {
		lastDate = 29
	}
	end = new Date(`${year}-${padMonth}-${lastDate} 23:59:59`)
	if (end.getMonth() + 1 > month) {
		lastDate--
		end = new Date(`${year}-${padMonth}-${lastDate} 23:59:59`)
	}
	const result = [start, end]
	return format === '' ? result : result.map(e => format(e, format))
}

const format = (() => {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]
	const abridgeDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]
	const abridgeMonths = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]
	const yyyy = 'yyyy' // 2020
	const yy = 'yy' // 2002: 02, 2020: 20
	const y = 'y' // 2002: 2, 2020: 20
	const MMMM = 'MMMM' // December
	const MMM = 'MMM' // Dec
	const MM = 'MM' // 12: 12, 6: 06
	const M = 'M' // 12: 12, 6: 6
	const dddd = 'dddd' // Sunday
	const ddd = 'ddd' // Sun
	const dd = 'dd' // 7: 07
	const d = 'd' // 7: 7
	const hh = 'hh' // 20: 08, 8: 08
	const h = 'h' // 20: 8, 8: 8
	const HH = 'HH' // 20: 20, 8: 08
	const H = 'H' // 20: 20, 8: 8
	const mm = 'mm' // 20: 20, 8: 08
	const m = 'm' // 20: 20, 8: 8
	const ss = 'ss' // 20: 20, 8: 08
	const s = 's' // 20: 20, 8: 8
	const tt = 'tt' // 20: PM, 8: AM
	const t = 't' // 20: P, 8: A

	function padStartZero(number) {
		if (typeof number === 'number') {
			if (number < 10) {
				return `0${number}`
			} else {
				return String(number)
			}
		} else {
			if (number.length < 2) {
				return `0${number}`
			} else {
				return number
			}
		}
	}

	function _format(date, ft) {
		function replacer(match, $y, $M, $d, $Hh, $m, $s, $t) {
			if ($y != null) {
				const year = date.getFullYear()
				const yearStr = String(year)
				const lastYearStr = yearStr.substr(-2)
				switch (match) {
					case yyyy:
						return yearStr
					case yy:
						return lastYearStr
					case $y:
						return Number(lastYearStr) > 9 ? lastYearStr : yearStr.substr(-1)
				}
			} else if ($M != null) {
				const month = date.getMonth()
				switch (match) {
					case MMMM:
						return months[month]
					case MMM:
						return abridgeMonths[month]
					case MM:
						return padStartZero(month + 1)
					case M:
						return String(month + 1)
				}
			} else if ($d != null) {
				const day = date.getDay()
				const getDate = date.getDate()
				switch (match) {
					case dddd:
						return days[day]
					case ddd:
						return abridgeDays[day]
					case dd:
						return padStartZero(getDate)
					case $d:
						return String(getDate)
				}
			} else if ($Hh != null) {
				const hour = date.getHours()
				const minusHour = hour - 12
				const computedHour = minusHour > 0 ? minusHour : hour
				switch (match) {
					case HH:
						return padStartZero(hour)
					case H:
						return String(hour)
					case hh:
						return padStartZero(computedHour)
					case h:
						return String(computedHour)
				}
			} else if ($m != null) {
				const minute = date.getMinutes()
				switch (match) {
					case mm:
						return padStartZero(minute)
					case m:
						return String(minute)
				}
			} else if ($s != null) {
				const second = date.getSeconds()
				switch (match) {
					case ss:
						return padStartZero(second)
					case s:
						return String(second)
				}
			} else if ($t != null) {
				const hour = date.getHours()
				const tmCondition = hour > 12
				const _tt = tmCondition ? 'PM' : 'AM'
				const _t = tmCondition ? 'P' : 'A'
				switch (match) {
					case tt:
						return _tt
					case t:
						return _t
				}
			}
			return match
		}

		if (typeof date === 'string') {
			date = new Date(date)
		}
		return ft.replace(
			new RegExp(
				`(${yyyy}|${yy}|${y})|(${MMMM}|${MMM}|${MM}|${M})|(${dddd}|${ddd}|${dd}|${d})|(${HH}|${H}|${hh}|${h})|(${mm}|${m})|(${ss}|${s})|(${tt}|${t})`,
				'g',
			),
			replacer,
		)
	}

	/**
	 * 格式化日期
	 * @param date [Date|DateString] = new Date()
	 * @param type [string] = yyyy-MM-dd 採時間轉換規範定義
	 */
	return (date = new Date(), ft = 'yyyy-MM-dd') => _format(date, ft)
})()

const doingTime = (doingMs = 0) => {
	const d = Math.floor(doingMs / day)
	const h = Math.floor((doingMs / hour) % 24)
	const m = Math.floor((doingMs / min) % 60)
	const s = Math.floor((doingMs / sec) % 60)

	return `${d}天 ${h}時 ${m}分 ${s}秒`
}

// const goingTimer = (doingMs = 0, options, cb) => {
// 	let ms = doingMs
// 	let time = ms
// 	let timer = null
// 	cb(time)
// 	const isMinus = options.mode === 'minus'
// 	timer = setInterval(() => {
// 		console.log('計時中...')
// 		time = isMinus ? (ms -= 1000) : (ms += 1000)
// 		cb(time)
// 	}, 1000)
// 	return {
// 		destroy: () => clearInterval(timer),
// 	}
// }

const stopTimer = timer => {
	timer ? timer.destroy() : ''
}

const today = (format = '', isStart = false) => {
	const date = new Date()
	const result = isStart ? newStartDate(date) : newEndDate(date)
	return format === '' ? result : format(result, format)
}

const tomorrow = (format = '', isStart = false) => {
	return recentDateResult(day, format, isStart)
}

const acquired = (format = '', isStart = false) => {
	return recentDateResult(day * 2, format, isStart)
}

const yesterday = (format = '', isStart = false) => {
	return recentDateResult(-day, format, isStart)
}

const theDayBeforeYesterday = (format = '', isStart = false) => {
	return recentDateResult(-day * 2, format, isStart)
}

const thisWeek = (format = '') => {
	return weekResult(0, format)
}

const lastWeek = (format = '') => {
	return weekResult(7, format)
}

const recentSevenDay = (format = '') => {
	return format === '' ? result : result.map(e => format(e, format))
}

const thisMonth = (format = '') => {
	return monthResult(false, format)
}

const lastMonth = (format = '') => {
	return monthResult(true, format)
}

const vTime = {
	format,
}

export default vTime
