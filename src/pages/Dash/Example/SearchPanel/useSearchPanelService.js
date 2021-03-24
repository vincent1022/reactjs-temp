import { injectExample } from '../useExampleService'
import { useRef, useCallback, useEffect } from 'react'
import { EExampleType } from '@/enums/EExampleType'
import { useKeyPress } from 'ahooks'

export const useSearchPanelService = () => {
	const addBrave = injectExample('addBrave')
	const stateRef = useRef({
		type: EExampleType.DOG,
		name: '',
	})
	const nameInput = useRef(null)
	const onChange = useCallback(
		key => ev => (stateRef.current[key] = ev.target.value),
		[stateRef],
	)
	const onCreate = useCallback(async () => {
		const { type, name } = stateRef.current
		if (typeof name === 'string' && name.trim() === '') {
			return alert('勇者名稱不得為空')
		}
		addBrave({
			name,
			type,
		})
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
