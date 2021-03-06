import style from './style.module.scss'
import useExampleService, {
	ExampleService,
} from '@/pages/Example/useExampleService'
import Control from '@/pages/Example/Control'
import List from '@/pages/Example/List'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

function Example({ children }) {
	const exampleService = useExampleService()
	return (
		<ExampleService.Provider value={exampleService}>
			<Content />
		</ExampleService.Provider>
	)
}

function Content() {
	const { pending } = useContext(ExampleService)
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
