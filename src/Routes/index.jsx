import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DashRoutes from '@/Routes/DashRoutes'
import LazyLoading from '@/Routes/components/LazyLoading'
const Home = lazy(() => import('@/pages/Home'))
const NotFound = lazy(() => import('./components/NotFound'))

function Routes() {
	return (
		<BrowserRouter>
			<Suspense fallback={<LazyLoading />}>
				<Switch>
					<Route path={`/`} exact>
						<Home />
					</Route>
					<Route path="/dash">
						<DashRoutes />
					</Route>
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</Suspense>
		</BrowserRouter>
	)
}

export default Routes
