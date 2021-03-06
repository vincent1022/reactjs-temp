import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

/*
options
	append: ref | dom
	throttle: Boolean default true
	run: String Boolean default run
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
		async (promiseFun, key) => {
			const { current: th } = throttle
			const { current: tKeys } = throttleKeys
			if (th) {
				if (tKeys[key]) {
					return
				}
				tKeys[key] = 1
			}

			try {
				setState({ error: undefined, pending: true })
				await promiseFun()
				setState({ error: undefined, pending: false })
			} catch (error) {
				setState({ error, pending: false })
			}

			if (th) {
				delete tKeys[key]
			}
		},
		[throttle.current, throttleKeys.current],
	)

	const dispatch = useCallback(
		(key = 'run') => {
			const fun = isFun ? promiseFun : promiseFun[key]
			pFun(fun, key)
		},
		[promiseFun, pFun],
	)

	useEffect(() => {
		const { current } = run
		if (current !== false) {
			dispatch(current)
		}
	}, [])

	return { error: state.error, pending: state.pending, dispatch }
}

export default useLoad
