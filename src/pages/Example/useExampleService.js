import { createContext, useState } from 'react'

export const ExampleService = createContext(null)

function useExampleService() {
	const [list, setList] = useState([])
	const addList = val => setList(list => [...list, val])
	const removeAtList = i => setList(list => [...list.slice(0, i), ...list.slice(i + 1)])
	return {
		list,
		addList,
		removeAtList,
	}
}

export default useExampleService
