import { useEffect, useRef } from 'react'

function useTypeSelectService({ all, onChange, defaultValue }) {
	const selectRef = useRef(null)

	useEffect(() => {
		if (selectRef.current != null && defaultValue != null) {
			selectRef.current.value = defaultValue
		}
	}, [defaultValue, selectRef.current])

	return {
		all,
		onChange,
		defaultValue,
		selectRef,
	}
}

export default useTypeSelectService
