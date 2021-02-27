import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example from '../pages/Example'
import Home from '../pages/Home'

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={'/'} exact>
					<Home />
				</Route>
				<Route path={'/Example'} exact>
					<Example />
				</Route>
				<Route>
					Oops 404 Not Found!
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
