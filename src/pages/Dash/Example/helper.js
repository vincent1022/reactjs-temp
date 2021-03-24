import { useCallback, useEffect, useState } from 'react'
import {
	__mockAddBraves,
	__mockGetBraves,
	__mockRemoveBraves,
	__mockUpdateBraves,
} from '@/pages/Dash/__mock__/brave'
import { useStorageState } from 'jsl-react/hooks'

const bravesSymbol = Symbol()
export const useBraves = () => {
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
