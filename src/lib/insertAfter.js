function insertAfter(insert, target) {
	const parent = target.parentNode

	if (parent.lastChild === target) {
		parent.appendChild(insert)
	} else {
		parent.insertBefore(insert, target.nextSibling)
	}
}

export default insertAfter
