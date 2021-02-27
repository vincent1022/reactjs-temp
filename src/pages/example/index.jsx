import React from 'react'
import useExampleService, { TodoService } from './useExampleService'
import List from './list'
import Control from './control'
import style from './style.module.scss'

function TodoList() {
	const todoListService = useExampleService()
	return (
		<TodoService.Provider value={todoListService}>
			<div className={style.root}>
				<div className="title">Example</div>
				<hr className={'break-line'}/>
				<Control />
				<List />
			</div>
		</TodoService.Provider>
	)
}

export default TodoList
