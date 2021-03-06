import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

/**
 * 加載用鉤子
 * @param promiseFun Promise<void> | { [key: string]: Promise<void> } 執行的方法
 * @param options?
 * 	append: ref | dom
 * 	throttle: Boolean = true
 * 	run: String | Boolean | [string, ...any] = run
 */
function useLoad(promiseFun, options) {
	const isFun = useMemo(() => typeof promiseFun === 'function', [promiseFun])
	const run = useRef(options?.run ?? 'run')
	const append = useRef(options?.append)
	const throttle = useRef(options?.throttle ?? true)
	const throttleKeys = useRef({})
	const [state, setState] = useState({
		error: undefined,
		pending: false,
	})

	const pFun = useCallback(
		async (fun, key, ...args) => {
			const { current: th } = throttle

			if (th) {
				if (throttleKeys.current[key]) {
					return
				}
				throttleKeys.current[key] = 1
			}

			try {
				setState({ error: undefined, pending: true })
				await fun.call(promiseFun, ...args)
				setState({ error: undefined, pending: false })
			} catch (error) {
				console.error(error)
				setState({ error, pending: false })
			}

			if (th) {
				delete throttleKeys.current[key]
			}
		},
		[throttle.current],
	)

	const dispatch = useCallback(
		(key = 'run', ...args) => {
			const fun = isFun ? promiseFun : promiseFun[key]
			pFun(fun, key, ...args)
		},
		[promiseFun, pFun],
	)

	useEffect(() => {
		const { current } = run
		if (current !== false) {
			if (Array.isArray(current)) {
				const key = current.splice(0, 1)
				dispatch(key, ...current)
			} else {
				dispatch(current)
			}
		}
	}, [])

	return { error: state.error, pending: state.pending, dispatch }
}

export default useLoad
