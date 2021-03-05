import { useEffect, useState } from 'react'
import { _hooksStore } from '../_store'

function useStorageState(symbol, initialValue) {
	const [state, setState] = useState(_hooksStore[symbol] ?? initialValue)
	useEffect(() => {
		_hooksStore[symbol] = state
	}, [state])
	return [state, setState]
}

export default useStorageState
