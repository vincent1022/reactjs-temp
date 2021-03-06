const sec = 1000
const min = sec * 60
const hour = min * 60
const day = hour * 24
const yyyyMMdd = 'yyyy-MM-dd'
const yyyyMMddHHmmss = yyyyMMdd + 'HH:mm:ss'

const newStartDate = afterFormat =>
	new Date(formatDate(afterFormat, yyyyMMdd) + ' 00:00:00')

const newEndDate = afterFormat =>
	new Date(formatDate(afterFormat, yyyyMMdd) + ' 23:59:59')

const recentDateResult = (increaseDay, format, isStart) => {
	const date = new Date()
	const time = date.getTime()
	const compileDate = new Date(time + increaseDay)
	const result = isStart ? newStartDate(compileDate) : newEndDate(compileDate)
	return format === '' ? result : formatDate(result, format)
}

const weekResult = (increaseDay = 0, format) => {
	const date = new Date()
	const time = date.getTime()
	const currentDay = date.getDay()
	const minusTime = day * (currentDay - 1 + increaseDay)
	const start = newStartDate(new Date(time - minusTime))
	const end = newEndDate(new Date(time - minusTime + day * 6))
	const result = [start, end]
	return format === '' ? result : result.map(e => formatDate(e, format))
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
	return format === '' ? result : result.map(e => formatDate(e, format))
}

const formatDate = (() => {
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
	const yy = 'yy' // 2002 -> 02, 2020 -> 20
	const y = 'y' // 2002 -> 2, 2020 -> 20
	const MMMM = 'MMMM' // January
	const MMM = 'MMM' // Jan
	const MM = 'MM' // 12 -> 12, 6 -> 06
	const M = 'M' // 12 -> 12, 6 -> 6
	const dddd = 'dddd' // Sunday
	const ddd = 'ddd' // Sun
	const dd = 'dd' // 7 -> 07
	const d = 'd' // 7 -> 7
	const hh = 'hh' // 20 -> 08, 8 -> 08
	const h = 'h' // 20 -> 8, 8 -> 8
	const HH = 'HH' // 20 -> 20, 8 -> 08
	const H = 'H' // 20 -> 20, 8 -> 8
	const mm = 'mm' // 20 -> 20, 8 -> 08
	const m = 'm' // 20 -> 20, 8 -> 8
	const ss = 'ss' // 20 -> 20, 8 -> 08
	const s = 's' // 20 -> 20, 8 -> 8
	const tt = 'tt' // 20 -> PM, 8 -> AM
	const t = 't' // 20 -> P, 8 -> A
	const year = date.getFullYear()
	const strYear = String(year)
	const lastStrYear = strYear.substr(-2)
	const month = date.getMonth()
	const realMonth = month + 1
	const strRealMonth = String(month + 1)
	const day = date.getDay()
	const getDate = date.getDate()
	const strGetDate = String(getDate)
	const hour = date.getHours()
	const strHour = String(hour)
	const minusHour = hour - 12
	const computedHour = minusHour > 0 ? minusHour : hour
	const strComputedHour = String(computedHour)
	const minute = date.getMinutes()
	const strMinute = String(minute)
	const second = date.getSeconds()
	const strSecond = String(second)
	const tmCondition = hour > 12
	const ttm = tmCondition ? 'PM' : 'AM'
	const tm = tmCondition ? 'P' : 'A'

	function increaseStartZero(number) {
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

	function replacer(match, $y, $M, $d, $Hh, $m, $s, $t) {
		if ($y != null) {
			switch (match) {
				case yyyy:
					return strYear
				case yy:
					return lastStrYear
				case $y:
					return Number(lastStrYear) > 9 ? lastStrYear : strYear.substr(-1)
			}
		} else if ($M != null) {
			switch (match) {
				case MMMM:
					return months[month]
				case MMM:
					return abridgeMonths[month]
				case MM:
					return increaseStartZero(realMonth)
				case M:
					return strRealMonth
			}
		} else if ($d != null) {
			switch (match) {
				case dddd:
					return days[day]
				case ddd:
					return abridgeDays[day]
				case dd:
					return increaseStartZero(getDate)
				case $d:
					return strGetDate
			}
		} else if ($Hh != null) {
			switch (match) {
				case HH:
					return increaseStartZero(hour)
				case H:
					return strHour
				case hh:
					return increaseStartZero(computedHour)
				case h:
					return strComputedHour
			}
		} else if ($m != null) {
			switch (match) {
				case mm:
					return increaseStartZero(minute)
				case m:
					return strMinute
			}
		} else if ($s != null) {
			switch (match) {
				case ss:
					return increaseStartZero(second)
				case s:
					return strSecond
			}
		} else if ($t != null) {
			switch (match) {
				case tt:
					return ttm
				case t:
					return tm
			}
		}
		return match
	}

	/**
	 * 格式化日期
	 * @param date [Date|DateString] = new Date()
	 * @param type [string] = yyyy-MM-dd 採時間轉換規範定義
	 */
	return (date = new Date(), type = 'yyyy-MM-dd') => {
		return type.replace(
			new RegExp(
				`(${yyyy}|${yy}|${y})|(${MMMM}|${MMM}|${MM}|${M})|(${dddd}|${ddd}|${dd}|${d})|(${HH}|${H}|${hh}|${h})|(${mm}|${m})|(${ss}|${s})|(${tt}|${t})`,
				'g',
			),
			replacer,
		)
	}
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
	return format === '' ? result : formatDate(result, format)
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
	return format === '' ? result : result.map(e => formatDate(e, format))
}

const thisMonth = (format = '') => {
	return monthResult(false, format)
}

const lastMonth = (format = '') => {
	return monthResult(true, format)
}
