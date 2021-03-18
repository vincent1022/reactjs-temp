import { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '@/core/style/index.css'
import './devLog'
import { Routes } from './routes'
import LazyLoading from '@/components/LazyLoading'
import NotFound from '@/components/NotFound'

const App = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<LazyLoading />}>
				<Switch>
					{Routes}
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</Suspense>
		</BrowserRouter>
	)
}

export { App }
