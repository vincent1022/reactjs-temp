import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.scss'
import {
	injectLayout,
	LayoutProvider,
} from '@/components/Layout/useLayoutService'

const Content = ({ children }) => {
	const { title } = injectLayout()
	return useMemo(
		() => (
			<main className={style.root}>
				<header className="header">
					<Link className="header__link" to={'/'}>
						回首頁
					</Link>
					<div className="header__text">{title}</div>
				</header>
				{children}
			</main>
		),
		[title],
	)
}

const Layout = ({ children }) => {
	return (
		<LayoutProvider>
			<Content>{children}</Content>
		</LayoutProvider>
	)
}

export default Layout
