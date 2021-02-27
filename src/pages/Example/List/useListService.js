import { ExampleService } from '../useExampleService'
import { useState, useContext, useEffect } from 'react'

function useListService() {
	const { list, removeAtList } = useContext(ExampleService)
	return {
		list,
		removeAtList,
	}
}

export default useListService
