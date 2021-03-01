import { ExampleService } from '../useExampleService'
import { useState, useContext, useMemo } from 'react'
import exampleTypeEnum from '../../../enums/exampleTypeEnum'

function useListService() {
	const { list } = useContext(ExampleService)
	const [type, setType] = useState(exampleTypeEnum.all)
	const onChangeType = ev => {
		setType(ev.target.value)
	}
	const filterList = useMemo(
		() => list.filter(e => type === exampleTypeEnum.all || e.type === type),
		[list, type],
	)
	return {
		list,
		onChangeType,
		filterList,
	}
}

export default useListService
