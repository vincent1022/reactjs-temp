import style from './style.module.scss'
import {
	ExampleProvider,
	injectExampleService,
} from '@/pages/Example/useExampleService'
import Control from '@/pages/Example/Control'
import List from '@/pages/Example/List'
import { Link } from 'react-router-dom'

function Example() {
	return (
		<ExampleProvider>
			<Content />
		</ExampleProvider>
	)
}

function Content() {
	const { pending } = injectExampleService()
	return (
		<div className={style.root}>
			{pending && <div className="loading" />}
			<div className="title">
				<Link className="title__link" to={'/'}>
					回首頁
				</Link>
				<div className="title__text">Example</div>
			</div>
			<hr className={'break-line'} />
			<Control />
			<List />
		</div>
	)
}

export default Example
