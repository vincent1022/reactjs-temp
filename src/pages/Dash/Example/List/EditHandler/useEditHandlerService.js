import { useCallback, useEffect, useRef } from 'react'
import { injectExample } from '@/pages/Dash/Example/useExampleService'
import { useBoolean } from 'ahooks'

const useEditModal = (item, stateRef, nameInput) => {
	const updateBrave = injectExample('updateBrave')
	const [visible, modalFun] = useBoolean(false)

	useEffect(() => {
		if (visible === false) {
			stateRef.current = { ...item }
		}
	}, [item, visible, stateRef])

	useEffect(() => {
		nameInput.current?.focus()
	}, [visible])

	const submit = useCallback(() => {
		const s = stateRef.current
		const isSameName = s.name === item.name
		const isSameType = s.type === item.type
		if (isSameName && isSameType) {
			return alert('不想改就給我按取消')
		}
		modalFun.setFalse()
		updateBrave({ brave: s, id: item.id })
	}, [modalFun, updateBrave, stateRef, item])

	return [visible, modalFun, submit]
}

const useDelModal = item => {
	const removeAtBraves = injectExample('removeAtBraves')
	const [visible, modalFun] = useBoolean(false)

	const submit = useCallback(() => {
		modalFun.setFalse()
		removeAtBraves(item.id)
	}, [modalFun.setFalse, removeAtBraves, item])

	return [visible, modalFun, submit]
}

export const useEditHandlerService = item => {
	const stateRef = useRef(item)
	const nameInput = useRef(null)
	const [visibleEdit, editModalFun, onSubmitEditModal] = useEditModal(
		item,
		stateRef,
		nameInput,
	)
	const [visibleDel, delModalFun, onSubmitDelModal] = useDelModal(item)

	const onChange = useCallback(
		(key, ev) => {
			stateRef.current[key] = ev.target.value
		},
		[stateRef],
	)

	return {
		nameInput,
		visibleEdit,
		editModalFun,
		onSubmitEditModal,
		visibleDel,
		delModalFun,
		onSubmitDelModal,
		onChange,
	}
}
