import { lazy } from 'react'
import { RouterGenerator } from 'jsl/react/lib'
const Home = lazy(() => import('@/pages/Home'))
const Example = lazy(() => import('@/pages/Example'))

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
				meta: {
					hello: 'world',
				},
			},
		],
	},
]

const Routes = RouterGenerator.init(routes)

export { Routes }
