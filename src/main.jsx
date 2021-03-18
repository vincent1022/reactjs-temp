import ReactDOM from 'react-dom'
import { Routes } from '@/core/app'
import { Suspense } from 'react'
import LazyLoading from '@/components/LazyLoading'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from '@/components/NotFound'

ReactDOM.render(
	<React.StrictMode>
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
	</React.StrictMode>,
	document.getElementById('root'),
)
