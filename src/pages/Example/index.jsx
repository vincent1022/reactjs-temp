import React, { useMemo } from 'react'
import style from './style.module.scss'
import {
	ExampleProvider,
	injectExampleService,
} from '@/pages/Example/useExampleService'
import Control from '@/pages/Example/Control'
import List from '@/pages/Example/List'

const Example = () => {
	return (
		<ExampleProvider>
			<Content />
		</ExampleProvider>
	)
}

const Content = () => {
	const { loading } = injectExampleService()
	return useMemo(
		() => (
			<div className={style.root}>
				{loading && <div className="loading" />}
				<Control />
				<List />
			</div>
		),
		[loading],
	)
}

export default Example
