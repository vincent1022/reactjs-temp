import { useCallback, useRef } from 'react'
import {
	useDelModal,
	useEditModal,
} from '@/pages/Dash/Example/List/EditHandler/helper'

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
