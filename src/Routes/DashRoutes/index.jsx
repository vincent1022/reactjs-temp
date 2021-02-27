import { lazy } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
const Example = lazy(() => import('@/pages/Example'))
const Home = lazy(() => import('@/pages/Home'))

function DashRoutes() {
	const { path } = useRouteMatch()
	return (
		<Switch>
			<Route path={`${path}`} exact>
				<Home />
			</Route>
			<Route path={`${path}/example`} exact>
				<Example />
			</Route>
		</Switch>
	)
}

export default DashRoutes
