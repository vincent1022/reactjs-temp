import { lazy } from 'react'
import { createBrowserHistory } from 'history'
import { createRoutes } from 'jsl/react/lib'
const Home = lazy(() => import('@/pages/Home'))
const Example = lazy(() => import('@/pages/Example'))

const history = createBrowserHistory()
const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/dash',
		redirect: '/dash/example',
		children: [
			{
				path: 'example',
				component: Example,
			},
		],
	},
]

const { Routes } = createRoutes(routes)
export { history, Routes }
