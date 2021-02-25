import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TodoList from '../todoList'
import Home from '../home'

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={'/'} exact>
					<Home />
				</Route>
				<Route path={'/todo'} exact>
					<TodoList />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
