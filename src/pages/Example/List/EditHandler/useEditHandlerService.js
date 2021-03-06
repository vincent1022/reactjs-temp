import { useContext, useEffect, useRef, useState } from 'react'
import { ExampleService } from '@/pages/Example/useExampleService'

function useEditHandlerService(item) {
	const { updateItem, removeAtList, fetchImg } = useContext(ExampleService)
	const [visibleEdit, setVisibleEdit] = useState(false)
	const [visibleDel, setVisibleDel] = useState(false)
	const state = useRef(item)

	useEffect(() => {
		if (visibleEdit === false) {
			state.current = { ...item }
		}
	}, [item, visibleEdit])

	function onToggleEditModal(visible) {
		setVisibleEdit(visible)
	}
	async function onSubmitEditModal() {
		const s = state.current
		const isSameName = s.name === item.name
		const isSameType = s.type === item.type
		if (isSameName && isSameType) {
			return alert('不想改就給我按取消')
		}
		if (!isSameType) {
			s.url = await fetchImg(s.type)
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
