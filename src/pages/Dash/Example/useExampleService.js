import { useCallback, useEffect, useState } from 'react'
import { useProvider, useStorageState } from 'jsl-react/hooks'
import { injectLayout } from '@/components/Layout/useLayoutService'
import {
	__mockAddBraves,
	__mockGetBraves,
	__mockRemoveBraves,
	__mockUpdateBraves,
} from '@/pages/Dash/__mock__/brave'

const bravesSymbol = Symbol()
const useBraves = () => {
	const [isLoading, setLoading] = useState(false)
	const [braves, setBraves] = useStorageState(bravesSymbol, [])

	const getBraves = useCallback(async () => {
		const braves = await __mockGetBraves()
		setBraves(braves)
	}, [setBraves, __mockGetBraves])

	const commonFetch = async run => {
		setLoading(true)
		run && (await run())
		await getBraves()
		setLoading(false)
	}

	const addBrave = useCallback(
		async brave => commonFetch(() => __mockAddBraves(brave)),
		[commonFetch, __mockAddBraves],
	)

	const updateBrave = useCallback(
		async brave => commonFetch(() => __mockUpdateBraves(brave)),
		[commonFetch, __mockUpdateBraves],
	)

	const removeAtBraves = useCallback(
		async brave => commonFetch(() => __mockRemoveBraves(brave)),
		[commonFetch, __mockRemoveBraves],
	)

	useEffect(() => {
		if (braves.length === 0) {
			commonFetch()
		}
	}, [])

	return {
		braves: braves,
		loading: isLoading,
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
