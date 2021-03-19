import React, { useMemo } from 'react'
import style from './style.module.scss'
import {
	ExampleProvider,
	injectExampleService,
} from '@/pages/Example/useExampleService'
import Control from '@/pages/Example/Control'
import List from '@/pages/Example/List'

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

const Example = () => {
	$devLog('warn', '>>> 可以使用 $devLog 在開發環境下隨意 log <<<')
	$devLog('>>> Welcome to dash/example <<<')
	return (
		<ExampleProvider>
			<Content />
		</ExampleProvider>
	)
}

export default Example
