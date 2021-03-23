import style from './style.module.scss'
import {
	ExampleProvider,
	injectExample,
} from '@/pages/Dash/Example/useExampleService'
import { SearchPanel } from '@/pages/Dash/Example/SearchPanel'
import List from '@/pages/Dash/Example/List'
import { useTitle } from 'ahooks'

const Loading = () => {
	const loading = injectExample('loading')
	if (!loading) return null
	return <div className="loading" />
}

const Content = () => {
	return (
		<div className={style.root}>
			<Loading />
			<SearchPanel />
			<List />
		</div>
	)
}

const Example = props => {
	useTitle('[Example] reactjs-temp')
	$devLog(
		'%c------------------------\n 以下為 Example 打印資訊\n------------------------',
		'color: yellow; font-size: 18px; font-weight: bold;',
	)
	$devLog(
		'%c> [console.log] $devLog 可以依照第一個傳入的 key 來取出對應的 console，undefined 則是一般的 console.log',
		'line-height: 1.3; padding-bottom: 4px;',
	)
	$devLog('warn', '[console.warn] 可以使用 $devLog 在開發環境下隨意 log`')
	$devLog('error', '[console.error] 每個跟組件都能拿到路由資訊(props) ↓`')
	$devLog(props)
	return (
		<ExampleProvider>
			<Content />
		</ExampleProvider>
	)
}

export default Example
