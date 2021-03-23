import { injectExample } from '../useExampleService'
import { useState, useMemo, useCallback } from 'react'
import { EExampleType } from '@/enums/EExampleType'

export const useListService = () => {
	const [type, setType] = useState(EExampleType.ALL)
	const filterBraves = injectExample(state =>
		state.braves.filter(e => type === EExampleType.ALL || e.type === type),
	)
	const onChangeType = useCallback(
		ev => {
			setType(ev.target.value)
		},
		[setType],
	)
	return {
		onChangeType,
		filterBraves,
	}
}
