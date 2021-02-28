import { useEffect, useState } from 'react'

function getStorageItem(key, initialValue) {
	const storageValue = localStorage.getItem(key)
	if (storageValue == null) {
		return initialValue
	}
	try {
		return JSON.parse(storageValue)
	} catch (err) {
		return initialValue
	}
}

function useLocalStorageState(key, initialValue) {
	const [state, setState] = useState(getStorageItem(key, initialValue))
	useEffect(() => {
		if (state == null) {
			localStorage.removeItem(key)
		} else {
			localStorage.setItem(key, JSON.stringify(state))
		}
	}, [state])
	return [state, setState]
}

export default useLocalStorageState
