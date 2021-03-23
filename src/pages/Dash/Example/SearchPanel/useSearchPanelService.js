import { injectExample } from '../useExampleService'
import { useRef, useCallback, useEffect } from 'react'
import { EExampleType } from '@/enums/EExampleType'
import { useKeyPress } from 'ahooks'

export const useSearchPanelService = () => {
	const braves = injectExample('braves')
	const addBrave = injectExample('addBrave')
	const fetchImg = injectExample('fetchImg')
	const stateRef = useRef({
		id: braves.length ? braves[braves.length - 1].id + 1 : 1,
		type: EExampleType.DOG,
		name: '',
	})
	const nameInput = useRef(null)
	const onChange = useCallback(
		key => ev => (stateRef.current[key] = ev.target.value),
		[stateRef],
	)
	const onCreate = useCallback(async () => {
		const { id, type, name } = stateRef.current
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
		stateRef.current.id++
		if (nameInput.current) {
			nameInput.current.value = ''
			stateRef.current.name = ''
		}
	}, [stateRef])
	const onKeyDown = useCallback(ev => ev.key === 'Enter' && onCreate(), [
		onCreate,
	])
	useKeyPress('ctrl.q', () => nameInput.current?.focus())
	useEffect(() => {
		nameInput.current?.focus()
	}, [nameInput.current])

	return {
		onChange,
		onKeyDown,
		onCreate,
		nameInput,
	}
}
