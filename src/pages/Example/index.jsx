import style from './style.module.scss'
import useExampleService, {
	ExampleService,
} from '@/pages/Example/useExampleService'
import Control from '@/pages/Example/Control'
import List from '@/pages/Example/List'

function Example() {
	const exampleService = useExampleService()
	return (
		<ExampleService.Provider value={exampleService}>
			<div className={style.root}>
				<div className="title">Example</div>
				<hr className={'break-line'} />
				<Control />
				<List />
			</div>
		</ExampleService.Provider>
	)
}

export default Example
