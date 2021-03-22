import { injectExample } from '../useExampleService'
import { useState, useMemo } from 'react'
import { EExampleType } from '../../../enums/EExampleType'

export const useListService = () => {
	const { braves } = injectExample()
	const [type, setType] = useState(EExampleType.ALL)
	const onChangeType = ev => {
		setType(ev.target.value)
	}
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
