import style from './style.module.scss'
import useExampleService, {
	ExampleService,
} from '@/pages/Example/useExampleService'
import Control from '@/pages/Example/Control'
import List from '@/pages/Example/List'
import { Link } from 'react-router-dom'

function Example() {
	const exampleService = useExampleService()
	return (
		<ExampleService.Provider value={exampleService}>
			<div className={style.root}>
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
		</ExampleService.Provider>
	)
}

export default Example
