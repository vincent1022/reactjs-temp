function update(index, value) {
	return arr => [...arr.slice(0, index), value, ...arr.slice(index + 1)]
}

function push(...value) {
	return arr => [...arr, ...value]
}

function unshift(...value) {
	return arr => [...value, ...arr]
}

function pop() {
	return arr => arr.slice(0, -1)
}

function shift() {
	return arr => arr.slice(1)
}

function splice(from, to, ...value) {
	return arr => [...arr.slice(0, from), ...value, ...arr.slice(from + to)]
}

export default {
	update,
	unshift,
	push,
	pop,
	shift,
	splice,
}
