import { createContext } from 'react'
import { useLocalStorageState } from '@/hooks'
import { Arr } from '@/lib'

export const ExampleService = createContext(null)

function useExampleService() {
	const [list, setList] = useLocalStorageState('mrt_list', [])
	const getItemIndexAndCall = (id, callback) => {
		const index = list.findIndex(e => e.id === id)
		if (index !== -1) {
			callback && callback(index)
		}
	}
	const addList = val => setList(Arr.push(val))
	const updateItem = (val, id) =>
		getItemIndexAndCall(id, i => setList(Arr.update(i, val)))
	const removeAtList = id =>
		getItemIndexAndCall(id, i => setList(Arr.splice(i, 1)))
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
