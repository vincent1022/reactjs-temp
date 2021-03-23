import { useCallback, useEffect, useRef } from 'react'
import { injectExample } from '@/pages/Example/useExampleService'
import { useBoolean } from 'ahooks'

export const useEditHandlerService = item => {
	const updateBrave = injectExample('updateBrave')
	const removeAtBraves = injectExample('removeAtBraves')
	const fetchImg = injectExample('fetchImg')
	const [visibleEdit, editModalFun] = useBoolean(false)
	const [visibleDel, delModalFun] = useBoolean(false)
	const stateRef = useRef(item)
	const nameRef = useRef(null)

	useEffect(() => {
		if (visibleEdit === false) {
			stateRef.current = { ...item }
		}
	}, [item, visibleEdit])

	useEffect(() => {
		nameRef.current?.focus()
	}, [visibleEdit])

	const onSubmitEditModal = useCallback(async () => {
		const s = stateRef.current
		const isSameName = s.name === item.name
		const isSameType = s.type === item.type
		if (isSameName && isSameType) {
			return alert('不想改就給我按取消')
		}
		if (!isSameType) {
			s.url = await fetchImg(s.type)
		}
		editModalFun.setFalse()
		updateBrave(s, item.id)
	}, [editModalFun, updateBrave, stateRef])
	const onSubmitDelModal = useCallback(() => {
		delModalFun.setFalse()
		removeAtBraves(item.id)
	}, [delModalFun, removeAtBraves])
	const onChange = useCallback(
		(key, ev) => {
			stateRef.current[key] = ev.target.value
		},
		[stateRef],
	)

	return {
		nameRef,
		visibleEdit,
		editModalFun,
		onSubmitEditModal,
		visibleDel,
		delModalFun,
		onSubmitDelModal,
		onChange,
	}
}
