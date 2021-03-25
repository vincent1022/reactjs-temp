import { useCallback, useEffect } from 'react'
import { useProvider, useStorageState, useLoad } from 'jsl-react/hooks'
import { injectLayout } from '@/components/Layout/useLayoutService'
import {
	__mockAddBraves,
	__mockGetBraves,
	__mockRemoveBraves,
	__mockUpdateBraves,
} from '@/pages/Dash/__mock__/brave'

const bravesSymbol = Symbol()
const useBraves = () => {
	const [{ loading }, bindLoading] = useLoad()
	const [braves, setBraves] = useStorageState(bravesSymbol, [])

	const getBraves = useCallback(async () => {
		const braves = await __mockGetBraves()
		setBraves(braves)
	}, [setBraves, __mockGetBraves])

	const addBrave = useCallback(
		async brave =>
			bindLoading(async () => {
				await __mockAddBraves(brave)
				await getBraves()
			}),
		[__mockAddBraves],
	)

	const updateBrave = useCallback(
		async brave =>
			bindLoading(async () => {
				await __mockUpdateBraves(brave)
				await getBraves()
			}),
		[__mockUpdateBraves],
	)

	const removeAtBraves = useCallback(
		async brave =>
			bindLoading(async () => {
				await __mockRemoveBraves(brave)
				await getBraves()
			}),
		[__mockRemoveBraves],
	)

	useEffect(() => {
		if (braves.length === 0) {
			bindLoading(getBraves)
		}
	}, [])

	return {
		braves: braves,
		loading,
		addBrave,
		updateBrave,
		removeAtBraves,
	}
}

const exampleService = () => {
	const useSetLayoutTitle = injectLayout('useSetLayoutTitle')
	const { braves, loading, addBrave, updateBrave, removeAtBraves } = useBraves()

	useSetLayoutTitle('Example')

	return {
		braves,
		loading,
		addBrave,
		updateBrave,
		removeAtBraves,
	}
}

export const { Provider: ExampleProvider, inject: injectExample } = useProvider(
	exampleService,
)
