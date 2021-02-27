import React from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<div className={styles.root}>
			<div class={'title'}>MyReactTemplate</div>
			<div class={'tip'}>
				範例
				<Link to={'/example'}>
					{' <'}點擊前往{'>'}
				</Link>
			</div>
		</div>
	)
}

export default Home
