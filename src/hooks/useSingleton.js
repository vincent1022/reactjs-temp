import { useState, useMemo, useCallback } from 'react'

const useSingleton = (initialValue, methods = {}) => {
	const [value, setValue] = useState(initialValue)

	const valueType = useMemo(() => typeof value, [value])

	const getResult = useCallback(
		value => {
			if (valueType === 'object') {
				if (Array.isArray(value)) {
					return [...value]
				} else {
					return { ...value }
				}
			}
			return value
		},
		[valueType],
	)

	const immerSetState = useCallback(
		(valOrCallback, ...args) => {
			if (valOrCallback != null) {
				setValue(value => {
					valOrCallback(value, ...args)
					return getResult(value)
				})
			} else {
				setValue(valOrCallback)
			}
		},
		[getResult],
	)

	const boundMethods = useMemo(
		() =>
			Object.entries(methods).reduce((methods, [name, fn]) => {
				methods[name] = (...args) => immerSetState(fn, ...args)
				return methods
			}, {}),
		[methods],
	)

	return [value, boundMethods, immerSetState]
}

export default useSingleton
