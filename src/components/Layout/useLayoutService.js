import React, { useState } from 'react'
import { useProvider } from 'jsl/react/hooks'

const layoutService = () => {
	const [title, setTitle] = useState('')
	return {
		title,
		setTitle,
	}
}

export const { inject: injectLayout, Provider: LayoutProvider } = useProvider(
	layoutService,
)
