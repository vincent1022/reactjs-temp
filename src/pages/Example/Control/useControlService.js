import { injectExampleService } from '../useExampleService'
import { useRef, useCallback, useEffect } from 'react'
import EExampleType from '../../../enums/EExampleType'

const useControlService = () => {
	const { list, addList, fetchImg } = injectExampleService()
	const state = useRef({
		id: list.length ? list[list.length - 1].id + 1 : 1,
		type: EExampleType.DOG,
		name: '',
	})
	const nameRef = useRef(null)
	const onChange = key => ev => (state.current[key] = ev.target.value)
	const onCreate = useCallback(async () => {
		const { id, type, name } = state.current

		if (typeof name === 'string' && name.trim() === '') {
			return alert('勇者名稱不得為空')
		}

		const url = await fetchImg(type)
		addList({
			id,
			url,
			name,
			type,
		})

		state.current.id++
		if (nameRef.current) {
			nameRef.current.value = ''
			state.current.name = ''
		}
	}, [state.current])
	const onKeyDown = ev => ev.key === 'Enter' && onCreate()
	useEffect(() => {
		nameRef.current.focus()
	}, [nameRef.current])
	return {
		onChange,
		onKeyDown,
		onCreate,
		nameRef,
	}
}

export default useControlService
