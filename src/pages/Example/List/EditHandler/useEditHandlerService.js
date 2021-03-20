import { useEffect, useRef } from 'react'
import { injectExample } from '@/pages/Example/useExampleService'
import { useBoolean } from 'ahooks'

const useEditHandlerService = item => {
	const { updateItem, removeAtList, fetchImg } = injectExample()
	const [visibleEdit, editModalFun] = useBoolean(false)
	const [visibleDel, delModalFun] = useBoolean(false)
	const state = useRef(item)
	const nameRef = useRef(null)

	useEffect(() => {
		if (visibleEdit === false) {
			state.current = { ...item }
		}
	}, [item, visibleEdit])

	useEffect(() => {
		nameRef.current?.focus()
	}, [visibleEdit])

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
		editModalFun.setFalse()
		updateItem(s, item.id)
	}
	const onSubmitDelModal = () => {
		delModalFun.setFalse()
		removeAtList(item.id)
	}
	const onChange = (key, ev) => {
		state.current[key] = ev.target.value
	}

	return {
		nameRef,
		visibleEdit,
		editModalFun,
		onSubmitEditModal,
		visibleDel,
		delModalFun,
		onSubmitDelModal,
		removeAtList,
		onChange,
	}
}

export default useEditHandlerService
