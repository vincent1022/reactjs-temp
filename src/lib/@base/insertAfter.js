function insertAfter(from, to) {
	const parent = to.parentNode

	if (parent.lastChild === to) {
		parent.append(from)
	} else {
		parent.insertBefore(from, to.nextSibling)
	}
}

export default insertAfter
