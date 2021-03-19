import { useLoad, useProvider } from 'jsl/react/hooks'
import { Arr } from 'jsl'
import EExampleType from '@/enums/EExampleType'
import axios from 'axios'
import { useLocalStorageState } from 'ahooks'
import { useEffect } from 'react'
import { injectLayout } from '@/components/Layout/useLayoutService'

const fetchPicture = async type => {
	if (type === EExampleType.DOG) {
		const res = await axios.get('https://dog.ceo/api/breeds/image/random')
		return res.data.message
	} else if (type === EExampleType.CAT) {
		const res = await axios.get('https://api.thecatapi.com/v1/images/search')
		return res.data[0].url
	}
}

const exampleService = () => {
	const { title, setTitle } = injectLayout()
	const [list, setList] = useLocalStorageState('mrt_list', [])
	const { loading, exec } = useLoad(fetchPicture, { run: false })

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

	useEffect(() => {
		if (title !== 'Example') {
			setTitle('Example')
		}
	}, [])

	return {
		list,
		addList,
		updateItem,
		removeAtList,
		loading,
		fetchImg: exec.run,
	}
}

export const {
	Provider: ExampleProvider,
	inject: injectExampleService,
} = useProvider(exampleService)
