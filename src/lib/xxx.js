// routeHistory

// doingTime
const doingTime = (doingMs = 0) => {
	const sec = 1000
	const min = sec * 60
	const hour = min * 60
	const day = hour * 24
	const days = Math.floor(doingMs / day)
	const strDays = String(days).padStart(2, '0')
	const hours = String(Math.floor((doingMs / hour) % 24)).padStart(2, '0')
	const mins = String(Math.floor((doingMs / min) % 60)).padStart(2, '0')
	const secs = String(Math.floor((doingMs / sec) % 60)).padStart(2, '0')
	if (days > 0) {
		return `${strDays} : ${hours} : ${mins} : ${secs}`
	} else {
		return `${hours} : ${mins} : ${secs}`
	}
}

// moment time START
class TimeModel {
	formatToTime: string = 'YYYY-MM-DD HH:mm:ss'
	formatToMinute: string = 'YYYY-MM-DD HH:mm'
	formatToDate: string = 'YYYY-MM-DD'

	thisWeek: () => moment.Moment[] = () => [
		moment().isoWeekday(1).startOf('day'),
		moment().endOf('day'),
	]

	lastWeek: () => moment.Moment[] = () => [
		moment().isoWeekday(-6).startOf('day'),
		moment().isoWeekday(0).endOf('day'),
	]

	thisMonth: () => moment.Moment[] = () => [
		moment().date(1).startOf('day'),
		moment().endOf('day'),
	]

	lastMonth: () => moment.Moment[] = () => [
		moment()
			.month(moment().month() - 1)
			.date(1)
			.startOf('day'),
		moment()
			.month(moment().month() - 1)
			.endOf('month'),
	]

	msTranslate(ms: number = 0) {
		const sec = 1000
		const min = sec * 60
		// const hour = min * 60
		// const day = hour * 24
		// const cDay = Math.floor(ms / day)
		// const cHour = Math.floor((ms / hour) % 24)
		const cMin = Math.floor((ms / min) % 60)
		const cSec = Math.floor((ms / sec) % 60)

		// return `${cDay}天 ${cHour}時 ${cMin}分 ${cSec}秒`
		if (cMin > 0) {
			return `${cMin}${t('簡寫:分')} ${cSec}${t('簡寫:秒')}`
		} else {
			return `${cSec}${t('簡寫:秒')}`
		}
	}
}
// moment time END

// time START
const sec = 1000
const min = sec * 60
const hour = min * 60
const day = hour * 24
const yyyyMMdd = 'yyyy-MM-dd'
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

const formatDate = (date = new Date(), type = 'yyyy-MM-dd') => {
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
	const increaseStartZero = number =>
		typeof number === 'number'
			? number < 10
				? `0${number}`
				: number
			: number.length < 2
			? `0${number}`
			: number
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
	const day = date.getDay()
	const getDate = date.getDate()
	const hour = date.getHours()
	const minusHour = hour - 12
	const computedHour = minusHour > 0 ? minusHour : hour
	const minute = date.getMinutes()
	const second = date.getSeconds()
	const tmCondition = hour > 12
	const ttm = tmCondition ? 'PM' : 'AM'
	const tm = tmCondition ? 'P' : 'A'
	let result = type
	if (result.indexOf(yyyy) !== -1) {
		result = result.replace(yyyy, year)
	} else if (result.indexOf(yy) !== -1) {
		result = result.replace(yy, lastStrYear)
	} else if (result.indexOf(y) !== -1) {
		result = result.replace(
			y,
			Number(lastStrYear) > 9 ? lastStrYear : strYear.substr(-1),
		)
	}
	if (result.indexOf(MMMM) !== -1) {
		result = result.replace(MMMM, months[month])
	} else if (result.indexOf(MMM) !== -1) {
		result = result.replace(MMM, abridgeMonths[month])
	} else if (result.indexOf(MM) !== -1) {
		result = result.replace(MM, increaseStartZero(realMonth))
	} else if (result.indexOf(M) !== -1) {
		result = result.replace(M, realMonth)
	}
	if (result.indexOf(dddd) !== -1) {
		result = result.replace(dddd, days[day])
	} else if (result.indexOf(ddd) !== -1) {
		result = result.replace(ddd, abridgeDays[day])
	} else if (result.indexOf(dd) !== -1) {
		result = result.replace(dd, increaseStartZero(getDate))
	} else if (result.indexOf(d) !== -1) {
		result = result.replace(d, getDate)
	}
	if (result.indexOf(HH) !== -1) {
		result = result.replace(HH, increaseStartZero(hour))
	} else if (result.indexOf(H) !== -1) {
		result = result.replace(H, hour)
	} else if (result.indexOf(hh) !== -1) {
		result = result.replace(hh, increaseStartZero(computedHour))
	} else if (result.indexOf(h) !== -1) {
		result = result.replace(h, computedHour)
	}
	if (result.indexOf(mm) !== -1) {
		result = result.replace(mm, increaseStartZero(minute))
	} else if (result.indexOf(m) !== -1) {
		result = result.replace(m, minute)
	}
	if (result.indexOf(ss) !== -1) {
		result = result.replace(ss, increaseStartZero(second))
	} else if (result.indexOf(s) !== -1) {
		result = result.replace(s, second)
	}
	if (result.indexOf(tt) !== -1) {
		result = result.replace(tt, ttm)
	} else if (result.indexOf(t) !== -1) {
		result = result.replace(t, tm)
	}
	return result
}

const doingTime = (doingMs = 0) => {
	const days = Math.floor(doingMs / day)
	const hours = Math.floor((doingMs / hour) % 24)
	const mins = Math.floor((doingMs / min) % 60)
	const secs = Math.floor((doingMs / sec) % 60)

	return `${days}天 ${hours}時 ${mins}分 ${secs}秒`
}

const goingTimer = (doingMs = 0, options, cb) => {
	let ms = doingMs
	let time = ms
	let timer = null
	cb(time)
	const isMinus = options.mode === 'minus'
	timer = setInterval(() => {
		console.log('計時中...')
		time = isMinus ? (ms -= 1000) : (ms += 1000)
		cb(time)
	}, 1000)
	return {
		destroy: () => clearInterval(timer),
	}
}

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

// const recentSevenDay = (format = '') => {
//   return format === '' ? result : result.map(e => formatDate(e, format))
// }

const thisMonth = (format = '') => {
	return monthResult(false, format)
}

const lastMonth = (format = '') => {
	return monthResult(true, format)
}
// time END
