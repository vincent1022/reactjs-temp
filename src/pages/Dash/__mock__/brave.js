import { timeout } from 'jsl'
import { EExampleType } from '@/enums/EExampleType'
import axios from 'axios'

const BRAVES_KEY = 'mrt_list'

const getBraves = () => {
	const storageBraves = localStorage.getItem(BRAVES_KEY)
	return storageBraves != null ? JSON.parse(storageBraves) : []
}

const fetchPicture = async type => {
	if (type === EExampleType.DOG) {
		const res = await axios.get('https://dog.ceo/api/breeds/image/random')
		return res.data.message
	} else if (type === EExampleType.CAT) {
		const res = await axios.get('https://api.thecatapi.com/v1/images/search')
		return res.data[0].url
	}
}

export const __mockGetBraves = async () => {
	const braves = getBraves()
	return await timeout().startSync(() => braves, 300)
}

export const __mockAddBraves = async brave => {
	const braves = getBraves()
	const url = await fetchPicture(brave.type)
	braves.push({
		...brave,
		id: braves.length > 0 ? braves[braves.length - 1].id + 1 : 1,
		url,
	})
	localStorage.setItem(BRAVES_KEY, JSON.stringify(braves))
	return await timeout().startSync(() => braves, 300)
}

export const __mockRemoveBraves = async id => {
	const braves = getBraves()
	const index = braves.findIndex(e => e.id === id)
	braves.splice(index, 1)
	localStorage.setItem(BRAVES_KEY, JSON.stringify(braves))
	return await timeout().startSync(() => braves, 300)
}

export const __mockUpdateBraves = async ({ id, brave }) => {
	const braves = getBraves()
	const index = braves.findIndex(e => e.id === id)
	if (brave.type !== braves[index].type) {
		brave.url = await fetchPicture(brave.type)
	}
	braves[index] = brave
	localStorage.setItem(BRAVES_KEY, JSON.stringify(braves))
	return await timeout().startSync(() => braves, 300)
}
