import { useBoolean } from 'ahooks'
import { useCallback, useEffect } from 'react'
import { injectExample } from '@/pages/Dash/Example/useExampleService'

export const useEditModal = (item, stateRef, nameInput) => {
	const updateBrave = injectExample('updateBrave')
	const fetchImg = injectExample('fetchImg')
	const [visible, modalFun] = useBoolean(false)

	useEffect(() => {
		if (visible === false) {
			stateRef.current = { ...item }
		}
	}, [item, visible, stateRef])

	useEffect(() => {
		nameInput.current?.focus()
	}, [visible])

	const submit = useCallback(async () => {
		const s = stateRef.current
		const isSameName = s.name === item.name
		const isSameType = s.type === item.type
		if (isSameName && isSameType) {
			return alert('不想改就給我按取消')
		}
		if (!isSameType) {
			s.url = await fetchImg(s.type)
		}
		modalFun.setFalse()
		updateBrave(s, item.id)
	}, [modalFun, updateBrave, stateRef, item])

	return [visible, modalFun, submit]
}

export const useDelModal = item => {
	const removeAtBraves = injectExample('removeAtBraves')
	const [visible, modalFun] = useBoolean(false)

	const onSubmit = useCallback(() => {
		modalFun.setFalse()
		removeAtBraves(item.id)
	}, [modalFun, removeAtBraves, item])

	return [visible, modalFun, onSubmit]
}
