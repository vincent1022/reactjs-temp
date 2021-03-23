import { useProvider } from 'jsl-react/hooks'
import { injectLayout } from '@/components/Layout/useLayoutService'
import { useBraves, useFetchPicture } from '@/pages/Dash/Example/helper'

const exampleService = () => {
	const useSetLayoutTitle = injectLayout('useSetLayoutTitle')
	const [loading, fetchImg] = useFetchPicture()
	const { braves, addBrave, updateBrave, removeAtBraves } = useBraves()

	useSetLayoutTitle('Example')

	return {
		braves,
		addBrave,
		updateBrave,
		removeAtBraves,
		loading,
		fetchImg,
	}
}

export const { Provider: ExampleProvider, inject: injectExample } = useProvider(
	exampleService,
)
