import { useEffect, useState } from 'react'
import { useProvider } from 'jsl-react/hooks'

const layoutService = () => {
	const [title, setTitle] = useState('')
	const useSetLayoutTitle = title => {
		useEffect(() => {
			setTitle(title)
		}, [title])
	}
	return {
		title,
		setTitle,
		useSetLayoutTitle,
	}
}

export const { inject: injectLayout, Provider: LayoutProvider } = useProvider(
	layoutService,
)
