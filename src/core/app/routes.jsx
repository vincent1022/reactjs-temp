import { lazy } from 'react'
import { routerGenerator } from 'jsl/react/lib'

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
				// beforeEnter(to, from, next) {
				// 	if (to.meta.hello === 'world') {
				// 		next('/')
				// 	}
				// },
			},
		],
	},
]

export default routerGenerator(routes)
