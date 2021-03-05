import { createContext } from 'react'
import { useLocalStorageState } from '@/hooks'

export const ExampleService = createContext(null)

function useExampleService() {
	const [list, setList] = useLocalStorageState('mrt_list', [])
	const getItemIndexAndCall = (id, callback) => {
		const index = list.findIndex(e => e.id === id)
		if (index !== -1) {
			callback && callback(index)
		}
	}
	const addList = val => setList(list => [...list, val])
	const updateItem = (val, id) =>
		getItemIndexAndCall(id, i =>
			setList(list => [...list.slice(0, i), val, ...list.slice(i + 1)]),
		)
	const removeAtList = id =>
		getItemIndexAndCall(id, i =>
			setList(list => [...list.slice(0, i), ...list.slice(i + 1)]),
		)
	return {
		list,
		addList,
		updateItem,
		removeAtList,
	}
}

// 為了做假 modal 用，又不想到 index.html 寫，所以出此下策
const modal = document.createElement('div')
modal.id = 'example-modal'
document.body.append(modal)

export default useExampleService
