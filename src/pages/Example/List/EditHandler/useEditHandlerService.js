import { useEffect, useRef } from 'react'
import { injectExampleService } from '@/pages/Example/useExampleService'
import { useBoolean } from 'jsl/react/hooks'

const useEditHandlerService = item => {
	const { updateItem, removeAtList, fetchImg } = injectExampleService()
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

	const onSubmitEditModal = async () => {
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
	const onSubmitDelModal = () => {
		hideDelModal()
		removeAtList(item.id)
	}
	const onChange = (key, ev) => {
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
