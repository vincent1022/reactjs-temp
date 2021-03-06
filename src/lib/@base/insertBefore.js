function insertBefore(newNode, existingNode) {
	const parent = existingNode.parentNode

	if (parent.firstChild === existingNode) {
		parent.prepend(newNode)
	} else {
		parent.insertBefore(newNode, existingNode)
	}
}

export default insertBefore
