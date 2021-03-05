import { useState } from 'react'
import { getStorageItem, useUpdateStorage } from '@/hooks/storage/util'

function useLocalStorageState(key, initialValue) {
	const [state, setState] = useState(
		getStorageItem(key, initialValue, localStorage),
	)
	useUpdateStorage(key, state, localStorage)
	return [state, setState]
}

export default useLocalStorageState
