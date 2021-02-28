import { useState } from 'react'

function useEditHandlerService(item) {
	const [visible, setVisible] = useState(false)
	function onShowModal() {
		setVisible(true)
	}
	function onCancel() {
		setVisible(false)
	}
	function onSubmit() {
		setVisible(false)
	}
	return {
		visible,
		onShowModal,
		onCancel,
		onSubmit,
	}
}

export default useEditHandlerService
