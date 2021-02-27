import { ExampleService } from '../useExampleService'
import { useState, useContext, useMemo } from 'react'
import exampleType from '../../../enums/exampleType'

function useListService() {
	const { list, removeAtList } = useContext(ExampleService)
	const [type, setType] = useState(exampleType.all)
	const onChangeType = ev => {
		setType(ev.target.value)
	}
	const filterList = useMemo(() => list.filter(e => type === exampleType.all || e.type === type), [list, type])
	return {
		list,
		removeAtList,
		onChangeType,
		filterList,
	}
}

export default useListService
