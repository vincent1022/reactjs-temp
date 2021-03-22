import { injectExample } from '../useExampleService'
import { useRef, useCallback, useEffect } from 'react'
import { EExampleType } from '../../../enums/EExampleType'
import { useKeyPress } from 'ahooks'

export const useSearchPanelService = () => {
	const { braves, addBrave, fetchImg } = injectExample()
	const state = useRef({
		id: braves.length ? braves[braves.length - 1].id + 1 : 1,
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
		addBrave({
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
	useKeyPress('ctrl.q', () => nameRef.current?.focus())
	useEffect(() => {
		nameRef.current?.focus()
	}, [nameRef.current])

	return {
		onChange,
		onKeyDown,
		onCreate,
		nameRef,
	}
}
