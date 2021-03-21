import { useEffect, useRef } from 'react'

export const useTypeSelectService = ({ all, onChange, defaultValue }) => {
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
