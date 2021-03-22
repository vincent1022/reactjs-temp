import styles from './style.module.scss'
import { Link } from 'react-router-dom'
import { useTitle } from 'ahooks'

const Home = () => {
	useTitle('reactjs-temp')
	return (
		<div className={styles.root}>
			<div className={'logo'}>
				<img src="/logo.svg" alt="" />
			</div>
			<div className={'title'}>L8ReactjsTemplate</div>
			<div className={'tip'}>
				範例
				<Link to={'/dash/example'}>
					{' <'}點擊前往{'>'}
				</Link>
			</div>
		</div>
	)
}

export default Home
