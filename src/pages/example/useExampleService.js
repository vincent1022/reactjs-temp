import { createContext } from 'react'
import useSingleton from '../../hooks/useSingleton'

export const TodoService = createContext(null)

const _listMethods = {
  add(state, value, value2) {
    state.push(value + value2)
  }
}

function useExampleService() {
	const [list, listMethods] = useSingleton([], _listMethods)
	return {
		list,
		listMethods,
	}
}

export default useExampleService
