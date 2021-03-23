import { lazy } from 'react'
import { createBrowserHistory } from 'history'
import { createRoutes } from 'jsl-react/lib'
import { NotFound } from '@/components/NotFound'
import { Layout } from '@/components/Layout'
const Home = lazy(() => import('@/pages/Home'))
const Example = lazy(() => import('@/pages/Dash/Example'))

const history = createBrowserHistory()
const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/dash',
		redirect: '/dash/example',
		component: Layout,
		notFound: NotFound,
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
