import { EExampleType } from '@/enums/EExampleType'
import axios from 'axios'
import { useLoad } from 'jsl-react/hooks'
import { useCallback } from 'react'
import { useLocalStorageState } from 'ahooks'
import { Arr } from 'jsl'

export const useFetchPicture = () => {
	const fetchPicture = useCallback(async type => {
		if (type === EExampleType.DOG) {
			const res = await axios.get('https://dog.ceo/api/breeds/image/random')
			return res.data.message
		} else if (type === EExampleType.CAT) {
			const res = await axios.get('https://api.thecatapi.com/v1/images/search')
			return res.data[0].url
		}
	}, [])

	const { loading, exec } = useLoad(fetchPicture, { run: false })

	return [loading, exec.run]
}

export const useBraves = () => {
	const [braves, setBraves] = useLocalStorageState('mrt_list', [])

	const getItemIndexAndCall = useCallback(
		(id, callback) => {
			const index = braves.findIndex(e => e.id === id)
			if (index !== -1) {
				callback && callback(index)
			}
		},
		[braves],
	)

	const addBrave = useCallback(val => setBraves(Arr.push(val)), [setBraves])

	const updateBrave = useCallback(
		(val, id) => getItemIndexAndCall(id, i => setBraves(Arr.update(i, val))),
		[getItemIndexAndCall, setBraves],
	)

	const removeAtBraves = useCallback(
		id => getItemIndexAndCall(id, i => setBraves(Arr.splice(i, 1))),
		[getItemIndexAndCall, setBraves],
	)

	return {
		braves,
		addBrave,
		updateBrave,
		removeAtBraves,
	}
}
