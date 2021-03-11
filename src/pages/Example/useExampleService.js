import { useLoad, useLocalStorageState, useProvider } from 'js575/react/hooks'
import { Arr } from 'js575/lib'
import EExampleType from '@/enums/EExampleType'
import axios from 'axios'

async function fetchPicture(type) {
	if (type === EExampleType.DOG) {
		const res = await axios.get('https://dog.ceo/api/breeds/image/random')
		return res.data.message
	} else if (type === EExampleType.CAT) {
		const res = await axios.get('https://api.thecatapi.com/v1/images/search')
		return res.data[0].url
	}
}

function exampleService() {
	const [list, setList] = useLocalStorageState('mrt_list', [])
	const { pending, exec } = useLoad(fetchPicture, { run: false })

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
		pending,
		fetchImg: exec.run,
	}
}

export const {
	Provider: ExampleProvider,
	inject: injectExampleService,
} = useProvider(exampleService)
