import { useProvider } from 'jsl-react/hooks'
import { injectLayout } from '@/components/Layout/useLayoutService'
import { useBraves } from '@/pages/Dash/Example/helper'

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
