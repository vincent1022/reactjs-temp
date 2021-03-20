import { Suspense } from 'react'
import { Router } from 'react-router'
import { Redirect, Route, Switch } from 'react-router-dom'
import '@/core/style/index.css'
import './devLog'
import { history, Routes } from './routes'
import LazyLoading from '@/components/LazyLoading'
import NotFound from '@/components/NotFound'

const App = () => {
	return (
		<Router history={history}>
			<Suspense fallback={<LazyLoading />}>
				<Switch>
					{Routes}
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</Suspense>
		</Router>
	)
}

export { App }
