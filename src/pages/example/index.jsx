import React from 'react'
import useExampleService, { ExampleService } from './useExampleService'
import List from './list'
import Control from './control'
import style from './style.module.scss'

function Example() {
	const exampleService = useExampleService()
	return (
		<ExampleService.Provider value={exampleService}>
			<div className={style.root}>
				<div className="title">Example</div>
				<hr className={'break-line'}/>
				<Control />
				<List />
			</div>
		</ExampleService.Provider>
	)
}

export default Example
