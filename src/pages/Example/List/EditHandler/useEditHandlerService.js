import { useContext, useEffect, useRef, useState } from 'react'
import { ExampleService } from '@/pages/Example/useExampleService'

function useEditHandlerService(item) {
	const { updateItem, removeAtList } = useContext(ExampleService)
	const [visibleEdit, setVisibleEdit] = useState(false)
	const [visibleDel, setVisibleDel] = useState(false)
	const state = useRef(item)

	useEffect(() => {
		if (visibleEdit === false) {
			state.current = JSON.parse(JSON.stringify(item))
		}
	}, [item, visibleEdit])

	function onToggleEditModal(visible) {
		setVisibleEdit(visible)
	}
	function onSubmitEditModal() {
		const s = state.current
		if (s.name === item.name && s.type === item.type) {
			return alert('不想改就給我按取消')
		}
		setVisibleEdit(false)
		updateItem(s, item.id)
	}
	function onToggleDelModal(visible) {
		setVisibleDel(visible)
	}
	function onSubmitDelModal() {
		setVisibleDel(false)
		removeAtList(item.id)
	}
	function onChange(key, ev) {
		state.current[key] = ev.target.value
	}

	return {
		visibleEdit,
		onToggleEditModal,
		onSubmitEditModal,
		visibleDel,
		onToggleDelModal,
		onSubmitDelModal,
		removeAtList,
		onChange,
	}
}

export default useEditHandlerService
