import { useContext, useEffect, useRef, useState } from 'react'
import { ExampleService } from '@/pages/Example/useExampleService'
import { useBoolean } from 'l8-hooks'

function useEditHandlerService(item) {
	const { updateItem, removeAtList, fetchImg } = useContext(ExampleService)
	const [
		visibleEdit,
		{ toggle: onToggleEditModal, setFalse: hideEditModal },
	] = useBoolean(false)
	const [
		visibleDel,
		{ toggle: onToggleDelModal, setFalse: hideDelModal },
	] = useBoolean(false)
	const state = useRef(item)

	useEffect(() => {
		if (visibleEdit === false) {
			state.current = { ...item }
		}
	}, [item, visibleEdit])

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
		hideEditModal()
		updateItem(s, item.id)
	}
	function onSubmitDelModal() {
		hideDelModal()
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
