import ReactDOM from 'react-dom'
import { routes } from '@/core/app'
import { Suspense } from 'react'
import LazyLoading from '@/components/LazyLoading'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from '@/components/NotFound'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Suspense fallback={<LazyLoading />}>
				<Switch>
					{routes.create()}
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</Suspense>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
)
