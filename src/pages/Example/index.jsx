import React, { useMemo } from 'react'
import style from './style.module.scss'
import {
	ExampleProvider,
	injectExampleService,
} from '@/pages/Example/useExampleService'
import Control from '@/pages/Example/Control'
import List from '@/pages/Example/List'
import { Link } from 'react-router-dom'

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
				<div className="title">
					<Link className="title__link" to={'/'}>
						回首頁
					</Link>
					<div className="title__text">Example</div>
				</div>
				<hr className={'break-line'} />
				<Control />
				<List />
			</div>
		),
		[loading],
	)
}

export default Example
