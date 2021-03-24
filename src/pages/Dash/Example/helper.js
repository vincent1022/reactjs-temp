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

	const addBrave = useCallback(
		async brave => {
			setLoading(true)
			await __mockAddBraves(brave)
			await getBraves()
			setLoading(false)
		},
		[setLoading, getBraves, __mockAddBraves],
	)

	const updateBrave = useCallback(
		async brave => {
			setLoading(true)
			await __mockUpdateBraves(brave)
			await getBraves()
			setLoading(false)
		},
		[setLoading, getBraves, __mockUpdateBraves],
	)

	const removeAtBraves = useCallback(
		async brave => {
			setLoading(true)
			await __mockRemoveBraves(brave)
			await getBraves()
			setLoading(false)
		},
		[setLoading, getBraves, __mockRemoveBraves],
	)

	useEffect(() => {
		;(async () => {
			if (braves.length === 0) {
				setLoading(true)
				await getBraves()
				setLoading(false)
			}
		})()
	}, [])

	return {
		braves: braves,
		loading: isLoading,
		addBrave,
		updateBrave,
		removeAtBraves,
	}
}
