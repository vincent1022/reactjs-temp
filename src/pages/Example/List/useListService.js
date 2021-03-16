import { injectExampleService } from '../useExampleService'
import { useState, useMemo } from 'react'
import EExampleType from '../../../enums/EExampleType'

const useListService = () => {
	const { list } = injectExampleService()
	const [type, setType] = useState(EExampleType.ALL)
	const onChangeType = ev => {
		setType(ev.target.value)
	}
	const filterList = useMemo(
		() => list.filter(e => type === EExampleType.ALL || e.type === type),
		[list, type],
	)
	return {
		list,
		onChangeType,
		filterList,
	}
}

export default useListService
