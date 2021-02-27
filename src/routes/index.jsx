import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LazyLoading from './components/LazyLoading'
import RouteLayout from './Layout'

const Example = lazy(() => import('../pages/Example'))
const Home = lazy(() => import('../pages/Home'))
const NotFound = lazy(() => import('./components/NotFound'))

function Routes() {
	return (
		<BrowserRouter>
			<Suspense fallback={LazyLoading}>
				<Switch>
					<RouteLayout>
						<Route path={'/'} exact>
							<Home />
						</Route>
						<Route path={'/Example'} exact>
							<Example />
						</Route>
					</RouteLayout>
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</Suspense>
		</BrowserRouter>
	)
}

export default Routes
