import ReactDOM from 'react-dom'
import App from './App'
import initApp from '@/core/app'

initApp()
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
)
