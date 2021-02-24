import React from 'react'
import useTodoService, { TodoService } from './useTodoService'
import List from './list'
import Control from './control'

function TodoList() {
	const todoListService = useTodoService()
	return (
		<TodoService.Provider value={todoListService}>
			<Control />
			<List />
		</TodoService.Provider>
	)
}

export default TodoList
