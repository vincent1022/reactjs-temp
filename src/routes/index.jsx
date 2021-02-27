import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example from '../pages/example'
import Home from '../pages/home'

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={'/'} exact>
					<Home />
				</Route>
				<Route path={'/example'} exact>
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
