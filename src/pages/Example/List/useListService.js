import { injectExample } from '../useExampleService'
import { useState, useMemo, useCallback } from 'react'
import { EExampleType } from '@/enums/EExampleType'

export const useListService = () => {
	const braves = injectExample('braves')
	const [type, setType] = useState(EExampleType.ALL)
	const onChangeType = useCallback(
		ev => {
			setType(ev.target.value)
		},
		[setType],
	)
	const filterList = useMemo(
		() => braves.filter(e => type === EExampleType.ALL || e.type === type),
		[braves, type],
	)
	return {
		list: braves,
		onChangeType,
		filterList,
	}
}
